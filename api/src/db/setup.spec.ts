import { getSqlQueries } from "./setup";

describe(".setup", () => {
  describe("getSqlQueries", () => {
    it("should return all sql queries", () => {
      const sql = `
        DROP table tbl_device;
        CREATE table tbl_device
        (
        device_id varchar not null,
        device_status_code varchar default 'NEW' not null,
        last_updated_ip varchar default NULL;`;

      const result = getSqlQueries(sql);
      expect(result).toEqual([
        "DROP table tbl_device",
        "CREATE table tbl_device ( device_id varchar not null, device_status_code varchar default 'NEW' not null, last_updated_ip varchar default NULL",
      ]);
    });
  });
});
