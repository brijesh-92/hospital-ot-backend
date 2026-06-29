import { otSlots, bookings } from '../../data';

export async function POST(request) {
  try {
    const body = await request.json();
    const { slot_id, surgeon_name, patient_name, patient_id, procedure, anesthesiologist_id, bed_id, notes, date } = body;

    if (!surgeon_name || !patient_name || !procedure) {
      return Response.json({ success: false, error: 'Missing required fields: surgeon_name, patient_name, procedure' }, { status: 400 });
    }

    let slot;
    if (slot_id && slot_id !== 'undefined' && slot_id !== '') {
      slot = otSlots.find(s => s.slot_id === slot_id);
      if (!slot) return Response.json({ success: false, error: `Slot ${slot_id} not found` }, { status: 404 });
    } else {
      slot = otSlots.find(s => s.status === 'available' && (!date || s.date === date));
      if (!slot) return Response.json({ success: false, error: 'No available OT slots found' }, { status: 404 });
    }

    if (slot.status === 'booked') {
      return Response.json({ success: false, error: `Slot ${slot.slot_id} is already booked` }, { status: 409 });
    }

    slot.status    = 'booked';
    slot.booked_by = surgeon_name;

    const booking = {
      booking_id:          `BKG-${Date.now()}`,
      slot_id:             slot.slot_id,
      ot_room:             slot.ot_room,
      date:                slot.date,
      date_display:        slot.date_display,
      time:                slot.time,
      time_end:            slot.time_end,
      duration_mins:       slot.duration_mins,
      surgeon_name,
      patient_name,
      patient_id:          patient_id || 'N/A',
      procedure,
      anesthesiologist_id: anesthesiologist_id || 'TBD',
      bed_id:              bed_id || 'TBD',
      notes:               notes || '',
      booked_at:           new Date().toISOString(),
      status:              'confirmed',
    };

    bookings.push(booking);

    return Response.json({ success: true, message: `OT slot successfully booked for ${patient_name}`, booking }, { status: 201 });
  } catch (err) {
    return Response.json({ success: false, error: 'Invalid request body' }, { status: 400 });
  }
}

export async function GET() {
  return Response.json({ success: true, total: bookings.length, bookings });
}

// PATCH — reschedule
export async function PATCH(request) {
  try {
    const body = await request.json();
    const { booking_id, new_slot_id } = body;

    const booking = bookings.find(b => b.booking_id === booking_id);
    if (!booking) return Response.json({ success: false, error: 'Booking not found' }, { status: 404 });

    const newSlot = otSlots.find(s => s.slot_id === new_slot_id);
    if (!newSlot) return Response.json({ success: false, error: 'New slot not found' }, { status: 404 });
    if (newSlot.status === 'booked') return Response.json({ success: false, error: 'New slot is already booked' }, { status: 409 });

    // Free old slot
    const oldSlot = otSlots.find(s => s.slot_id === booking.slot_id);
    if (oldSlot) { oldSlot.status = 'available'; oldSlot.booked_by = null; }

    // Book new slot
    newSlot.status    = 'booked';
    newSlot.booked_by = booking.surgeon_name;

    booking.slot_id      = newSlot.slot_id;
    booking.ot_room      = newSlot.ot_room;
    booking.date         = newSlot.date;
    booking.date_display = newSlot.date_display;
    booking.time         = newSlot.time;
    booking.time_end     = newSlot.time_end;
    booking.status       = 'rescheduled';

    return Response.json({ success: true, message: `Booking rescheduled to ${newSlot.date_display} ${newSlot.time}–${newSlot.time_end}`, booking });
  } catch (err) {
    return Response.json({ success: false, error: 'Invalid request body' }, { status: 400 });
  }
}

// DELETE — cancel
export async function DELETE(request) {
  try {
    const body = await request.json();
    const { booking_id } = body;

    const idx = bookings.findIndex(b => b.booking_id === booking_id);
    if (idx === -1) return Response.json({ success: false, error: 'Booking not found' }, { status: 404 });

    const booking = bookings[idx];
    const slot = otSlots.find(s => s.slot_id === booking.slot_id);
    if (slot) { slot.status = 'available'; slot.booked_by = null; }

    bookings[idx].status = 'cancelled';

    return Response.json({ success: true, message: `Booking ${booking_id} cancelled successfully`, booking: bookings[idx] });
  } catch (err) {
    return Response.json({ success: false, error: 'Invalid request body' }, { status: 400 });
  }
}
