declare module "time-slots-generator" {
  /**
   * A blocked time range represented in minutes.
   * Example: [270, 360] => 4:30am to 6:00am
   */
  export type BlockedTime = [start: number, end: number];

  /**
   * Allowed interval strings.
   */
  export type TimeInterval =
    | "tenth"
    | "quarter"
    | "half"
    | "one"
    | "two"
    | "three"
    | "four";

  /**
   * Map of time-in-minutes to human-readable time.
   * Example: { 270: "4:30" }
   */
  export type TimeSlotMap = Record<number, string>;

  /**
   * Generates time slots for a full day (0–1440 minutes),
   * optionally filtering out blocked times.
   *
   * @param blockTimes Array of blocked time ranges
   * @param showTimeAsString Whether to return a map of time → string
   * @param timeInterval Interval granularity
   * @param includeStartBlockedTime Include start times of blocked ranges
   * @param includeEndBlockedTime Include end times of blocked ranges
   */
  export function getTimeSlots(
    blockTimes?: BlockedTime[],
    showTimeAsString?: false,
    timeInterval?: TimeInterval,
    includeStartBlockedTime?: boolean,
    includeEndBlockedTime?: boolean
  ): number[];

  export function getTimeSlots(
    blockTimes?: BlockedTime[],
    showTimeAsString?: true,
    timeInterval?: TimeInterval,
    includeStartBlockedTime?: boolean,
    includeEndBlockedTime?: boolean
  ): TimeSlotMap;
}
