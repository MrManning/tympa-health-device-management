INSERT INTO tbl_device (
  device_id,
  device_make,
  device_model,
  device_os_version
)
SELECT
  *,
  (ARRAY['Samsung','Apple', 'LG', 'Google'])[floor(random()*4)+1],
  (ARRAY['12 Pro', '12', '14', '7a', 'S23'])[floor(random()*5)+1],
  (ARRAY['Android 12','Android 13', 'iOS 17', 'iOS 16'])[floor(random()*4)+1]
FROM generate_series(1, 20);