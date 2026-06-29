import { patients } from '../../data';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const patient_id = searchParams.get('patient_id');
  const name       = searchParams.get('name');
  const mrn        = searchParams.get('mrn');

  let result = [...patients];
  if (patient_id) result = result.filter(p => p.patient_id === patient_id);
  if (mrn)        result = result.filter(p => p.mrn === mrn);
  if (name)       result = result.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));

  if ((patient_id || mrn) && result.length === 0) {
    return Response.json({ success: false, error: 'Patient not found' }, { status: 404 });
  }

  // Multiple patients with same name — flag it
  const multiple_found = result.length > 1;

  return Response.json({
    success: true,
    total: result.length,
    multiple_found,
    message: multiple_found
      ? `${result.length} patients found with this name. Please confirm using MRN or patient ID.`
      : null,
    patients: result,
  });
}
