import { otSlots } from '../../data';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const date      = searchParams.get('date');      // YYYY-MM-DD
  const specialty = searchParams.get('specialty'); // General Surgery, Cardiac, etc.
  const status    = searchParams.get('status');    // available, booked

  let result = [...otSlots];
  if (date)      result = result.filter(s => s.date === date);
  if (specialty) result = result.filter(s => s.specialty.toLowerCase().includes(specialty.toLowerCase()));
  if (status)    result = result.filter(s => s.status === status);

  const summary = {
    total:     result.length,
    available: result.filter(s => s.status === 'available').length,
    booked:    result.filter(s => s.status === 'booked').length,
  };

  return Response.json({
    success: true,
    summary,
    slots: result,
  });
}
