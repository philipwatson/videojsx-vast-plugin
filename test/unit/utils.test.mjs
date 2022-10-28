import * as utils from "../../src/utils.mjs";


const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;

describe('Utils', () => {
  describe('Calculate time offsets', ()=> {

    it ('should support offsets expressed as time codes in hh:mm:ss format', () => {
      expect(utils.convertOffsetToSeconds('5:')).toStrictEqual(5 * SECONDS_IN_HOUR);
      expect(utils.convertOffsetToSeconds('5:3')).toStrictEqual(5 * SECONDS_IN_HOUR + 3 * SECONDS_IN_MINUTE);
      expect(utils.convertOffsetToSeconds('5:03')).toStrictEqual(5 * SECONDS_IN_HOUR + 3 * SECONDS_IN_MINUTE);
      expect(utils.convertOffsetToSeconds('5:03:28')).toStrictEqual(5 * SECONDS_IN_HOUR + 3 * SECONDS_IN_MINUTE + 28);
      expect(utils.convertOffsetToSeconds('242:5:03:28')).toStrictEqual(5 * SECONDS_IN_HOUR + 3 * SECONDS_IN_MINUTE + 28);
      expect(utils.convertOffsetToSeconds('4:30')).toStrictEqual( + 4 * SECONDS_IN_HOUR + 30 * SECONDS_IN_MINUTE);
      expect(utils.convertOffsetToSeconds('::75')).toStrictEqual(75);
      expect(utils.convertOffsetToSeconds(':22:')).toStrictEqual(22 * SECONDS_IN_MINUTE);
      expect(utils.convertOffsetToSeconds('0:22')).toStrictEqual(22 * SECONDS_IN_MINUTE);
    });

    it('should support offsets expressed as percentage', () => {
      expect(utils.convertOffsetToSeconds('10%', null)).toStrictEqual(null);
      expect(utils.convertOffsetToSeconds('25%', 200)).toStrictEqual(50);
      expect(utils.convertOffsetToSeconds('25%', '200')).toStrictEqual(50);
    });

    it('should support offsets expressed as number in seconds', () => {
      expect(utils.convertOffsetToSeconds(6, null)).toStrictEqual(6);
      expect(utils.convertOffsetToSeconds(6, 10)).toStrictEqual(6);
      expect(utils.convertOffsetToSeconds('8', null)).toStrictEqual(8);
      expect(utils.convertOffsetToSeconds('8', 20)).toStrictEqual(8);
    });

    it('should return null for invalid values', () => {
      expect(utils.convertOffsetToSeconds('abc', null)).toStrictEqual(null);
    });
  })
});
