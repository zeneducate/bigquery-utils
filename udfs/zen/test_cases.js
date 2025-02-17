const { generate_udf_test, generate_udaf_test } = unit_test_utils;

generate_udf_test("postcode_outcode", [
  { inputs: [`"SW1A 1AA"`], expected_output: `"SW1A"` },
  { inputs: [`"E14 3BE"`], expected_output: `"E14"` },
  { inputs: [`"FooBar"`], expected_output: `"FooBar"` },
]);

generate_udf_test("week_ending", [
  { inputs: [`TIMESTAMP "2025-02-05 14:30:00"`], expected_output: `DATE "2025-02-07"` },
]);

generate_udf_test("week_ending", [
  { inputs: [`DATE "2025-01-31"`],               expected_output: `DATE "2025-01-31"` },
  { inputs: [`DATE "2025-02-01"`],               expected_output: `DATE "2025-02-07"` },
  { inputs: [`DATE "2025-02-02"`],               expected_output: `DATE "2025-02-07"` },
  { inputs: [`DATE "2025-02-03"`],               expected_output: `DATE "2025-02-07"` },
  { inputs: [`DATE "2025-02-04"`],               expected_output: `DATE "2025-02-07"` },
  { inputs: [`DATE "2025-02-05"`],               expected_output: `DATE "2025-02-07"` },
  { inputs: [`DATE "2025-02-06"`],               expected_output: `DATE "2025-02-07"` },
  { inputs: [`DATE "2025-02-07"`],               expected_output: `DATE "2025-02-07"` },
  { inputs: [`DATE "2025-02-08"`],               expected_output: `DATE "2025-02-14"` },
  { inputs: [`DATE "2025-02-09"`],               expected_output: `DATE "2025-02-14"` },
]);

generate_udf_test("week_ending", [
  { inputs: [`DATETIME "2025-02-05 14:30:00"`],  expected_output: `DATE "2025-02-07"` },
]);

generate_udf_test("week_ending", [
  { inputs: [`"2025-02-05 14:30:00"`],           expected_output: `DATE "2025-02-07"` },
  { inputs: [`"2025-02-05"`],                    expected_output: `DATE "2025-02-07"` },
]);

generate_udf_test("is_zeneducate_email", [
  { inputs: [`"contact@example.com"`], expected_output: `false` },
  { inputs: [`"admin@zeneducate.com"`], expected_output: `true` },
])
