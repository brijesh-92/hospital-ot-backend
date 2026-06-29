import { equipment } from '../../data';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category'); // Surgical, Imaging, Cardiac, etc.
  const status   = searchParams.get('status');   // available, in_use, maintenance

  let result = [...equipment];
  if (category) result = result.filter(e => e.category.toLowerCase() === category.toLowerCase());
  if (status)   result = result.filter(e => e.status === status);

  const summary = {
    total: result.length,
    available:   result.filter(e => e.status === 'available').length,
    in_use:      result.filter(e => e.status === 'in_use').length,
    maintenance: result.filter(e => e.status === 'maintenance').length,
  };

  return Response.json({
    success: true,
    summary,
    equipment: result,
  });
}
