import { anesthesiologists } from '../../data';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const specialization = searchParams.get('specialization');
  const status         = searchParams.get('status'); // available, on_leave, in_ot
  const shift          = searchParams.get('shift');  // Morning, Afternoon

  let result = [...anesthesiologists];
  if (specialization) result = result.filter(a => a.specialization.toLowerCase().includes(specialization.toLowerCase()));
  if (status)         result = result.filter(a => a.status === status);
  if (shift)          result = result.filter(a => a.shift.toLowerCase() === shift.toLowerCase());

  const summary = {
    total: result.length,
    available: result.filter(a => a.status === 'available').length,
    on_leave:  result.filter(a => a.status === 'on_leave').length,
    in_ot:     result.filter(a => a.status === 'in_ot').length,
  };

  return Response.json({
    success: true,
    summary,
    anesthesiologists: result,
  });
}
