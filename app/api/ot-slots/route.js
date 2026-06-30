import { redis } from '../../lib/redis';
import { otSlots } from '../../data';

const SLOTS_KEY = 'ot:slots';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');
  const status = searchParams.get('status');

  let slots = (await redis.get(SLOTS_KEY)) || otSlots;

  if (date) slots = slots.filter(s => s.date === date);
  if (status) slots = slots.filter(s => s.status === status);

  const available = slots.filter(s => s.status === 'available').length;
  const booked = slots.filter(s => s.status === 'booked').length;
  const total = slots.length;

  return Response.json({
    success: true,
    summary: { total, available, booked },
    slots,
  });
}