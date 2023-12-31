/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ApiResponse<T = any> {
   data: T;
   success: boolean;
   message: string;
   error: any;
}

// type keyType = 'day' | 'month' | 'year' | 'week' | 'range' | 'days-month';
export interface ChartDataModel<T = any> {
   data: T[];
}

export interface ChartDataByMonth<T = any> extends ChartDataModel<T> {
   month: string;
}
