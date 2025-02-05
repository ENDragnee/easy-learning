export interface SerializedData {
    _id: string;
    data: string;
    tags: string[];
    createdAt: Date;
  }
  
  export interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data?: T;
  }