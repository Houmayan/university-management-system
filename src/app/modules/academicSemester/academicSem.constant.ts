import {
  TAcademicSemesterCodeMap,
  TCode,
  TMonth,
  TName,
} from './academicSem.interface';

export const academicMonths: TMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const academicSemesterCodeMap: TAcademicSemesterCodeMap = {
  Autumn: '01',
  Spring: '02',
  Summer: '03',
};
export const academicSemestersName: TName[] = ['Autumn', 'Spring', 'Summer'];
export const academicSemesterCodes: TCode[] = ['01', '02', '03'];
