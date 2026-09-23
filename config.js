// BlueCompliance client configuration
window.BC_CONFIG = {
  // Supabase project (leave empty to run fully static from data/*.json)
  supabaseUrl: '',            // e.g. 'https://abcdefgh.supabase.co'
  supabaseAnonKey: '',        // anon public key (RLS protects the data)
  // Vector chart archives (three files, each < 25 MB so they can be uploaded through the GitHub web UI).
  // Relative paths (same origin) or full URLs (Supabase Storage / R2). Host must allow HTTP range requests.
  chartUrls: {
    base:    'chart-base.pmtiles',     // land, coast, lakes, islands, reefs, rivers, ports, names
    bathy:   'chart-bathy.pmtiles',    // depth bands
    contour: 'chart-contour.pmtiles'   // depth contours + labels
  },
  // Alternatively one combined archive built by chart/build_chart.py (65 MB, needs git push or object storage):
  // chartUrl: 'chart/chart.pmtiles',
  // Store every evaluation in the `evaluation` table (requires an authenticated session; see README)
  // Glyph (font) tiles; default = fonts/ folder shipped with the site
  glyphsUrl: 'fonts/{fontstack}/{range}.pbf',
  saveEvaluations: false
};
