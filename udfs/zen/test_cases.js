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

generate_udf_test("platform_time_string_to_time", [
  { inputs: [`"08:01:02"`], expected_output: `TIME '08:01:02'` },
  { inputs: [`"08:1:2"`], expected_output: `TIME '08:01:02'` },
  { inputs: [`"08:01"`], expected_output: `TIME '08:01:00'` },
  { inputs: [`"08:1"`], expected_output: `TIME '08:01:00'` },
  { inputs: [`"8:1 am"`], expected_output: `TIME '08:01:00'` },
  { inputs: [`"8:10 am"`], expected_output: `TIME '08:10:00'` },
  { inputs: [`"8:5 am"`], expected_output: `TIME '08:05:00'` },
  { inputs: [`"8:5 pm"`], expected_output: `TIME '20:05:00'` },
  { inputs: [`"12:5 pm"`], expected_output: `TIME '12:05:00'` },
  { inputs: [`"12:5 am"`], expected_output: `TIME '00:05:00'` },
  { inputs: [`"12:59 am"`], expected_output: `TIME '00:59:00'` },
  { inputs: [`"01:01 am"`], expected_output: `TIME '01:01:00'` },
])

generate_udf_test("platform_numeric_string_to_numeric", [
  { inputs: [`"  "`], expected_output: `NUMERIC '0'` },
  { inputs: [`""`], expected_output: `NUMERIC '0'` },
  { inputs: [`"1"`], expected_output: `NUMERIC '1'` },
  { inputs: [`"1.1"`], expected_output: `NUMERIC '1.1'` },
  { inputs: [`"-1.1"`], expected_output: `NUMERIC '-1.1'` },
  { inputs: [`"9,999.1"`], expected_output: `NUMERIC '9999.1'` },
  { inputs: [`"9,999,999.1"`], expected_output: `NUMERIC '9999999.1'` },
  { inputs: [`"1,234,567,890,123,456,789,012,345.6789"`], expected_output: `NUMERIC '1234567890123456789012345.6789'` }
])

generate_udf_test("interval_contains", [
  { inputs: [0, 10, -1], expected_output: `false` },
  { inputs: [0, 10, 0], expected_output: `true` },
  { inputs: [0, 10, 5], expected_output: `true` },
  { inputs: [0, 10, 10], expected_output: `true` },
  { inputs: [0, 10, 11], expected_output: `false` },
  { inputs: [0, null, -1], expected_output: `false` },
  { inputs: [0, null, 1], expected_output: `true` },
  { inputs: [0, null, 11], expected_output: `true` },
])

generate_udf_test("intervals_overlap", [
  { inputs: [0, 3, -4, -1], expected_output: `false` },
  { inputs: [0, 3, -4,  1], expected_output: `true` },
  { inputs: [0, 3, 1,  2], expected_output: `true` },
  { inputs: [0, 3, 1,  5], expected_output: `true` },
  { inputs: [0, 3, 4,  5], expected_output: `false` },
  { inputs: [0, 3, -4,  4], expected_output: `true` },
])
