// BlueCompliance client configuration
window.BC_CONFIG = {
  // Supabase project (leave empty to run fully static from data/*.json)
  supabaseUrl: '',            // e.g. 'https://abcdefgh.supabase.co'
  supabaseAnonKey: '',        // anon public key (RLS protects the data)
  // Vector chart archive. Same-origin path or a full URL (Supabase Storage / R2 / GitHub Pages) – host must allow HTTP range requests.
  chartUrl: 'chart/chart.pmtiles',
  // Store every evaluation in the `evaluation` table (requires an authenticated session; see README)
  saveEvaluations: false
};
