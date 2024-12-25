export type TMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TName = 'Autumn' | 'Spring' | 'Summer';
export type TCode = '01' | '02' | '03';

export type TAcademicSemester = {
  name: TName;
  code: TCode;
  year: Date;
  startMonth: TMonth;
  endMonth: TMonth;
};