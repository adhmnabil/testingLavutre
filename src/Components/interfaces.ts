export interface cardDetail {
    name: string;
    title: string;
    city: string;
    degree: string;
    skills: string;
  }

  interface Job {
    uuid: string;
    title: string;
    company_uuid: string;
    url: string;
    is_top: boolean;
    gpa: number;
    years_of_experience: number[];
    geolocation: {
      latitude: number;
      longitude: number;
    };
    willing_to_travel: boolean;
    willing_to_relocate: boolean;
    owns_a_car: boolean;
    visa_sponsorship: boolean;
    salary: {
      min: number;
      max: number;
    };
    gender: string | null;
    description: string | null;
    requirements: string | null;
    translations: []; 
    skills: string[];
    uri: string;
    posted_at: string;
    score: number;
    is_applied: boolean;
    applied_at: string | null;
    outside: boolean;
    has_profile: boolean;
    outside_key: string | null;
    hidden_columns: []; 
    job_type: string[];
    degree: string[];
    industry: string[];
    major: string[];
    nationality: string[];
    career_level: string[];
    languages: string[];
    location: {
      city: string | null;
      country: string | null;
    };
    category: string[];
  }
  
  interface JobResults {
    jobs: Job[];
    total: number;
    limit: number;
    page: number;
    pages: number;
  }
  
  interface DateTime {
    date: string;
    timezone_type: number;
    timezone: string;
  }
  
  export interface ApiResponse {
    statusCode: number;
    message: string;
    results: JobResults;
    dateTime: DateTime;
  }

  export interface RequestBody {
    language_profile_uuid: string;
    itemQuery: string;
    limit: number;
    page: number;
  }
  export interface JobResponse {
    statusCode: number;
    message: string;
    results: {
      jobs: {
        uuid: string;
        title: string;
        company_uuid: string;
        url: string;
        is_top: boolean;
        gpa: number;
        years_of_experience: number[];
        geolocation: {
          latitude: number;
          longitude: number;
        };
        willing_to_travel: boolean;
        willing_to_relocate: boolean;
        owns_a_car: boolean;
        visa_sponsorship: boolean;
        salary: {
          min: number | string;
          max: number | string;
        };
        gender: string | null;
        description: string | null;
        requirements: string | null;
        translations: any[];
        skills: string[];
        uri: string;
        posted_at: string;
        score: number;
        is_applied: boolean;
        applied_at: string | null;
        outside: boolean;
        has_profile: boolean;
        outside_key: string | null;
        hidden_columns: string[];
        job_type: string[];
        degree: string[];
        industry: string[];
        major: string[];
        nationality: string[];
        career_level: string[];
        languages: string[];
        location: {
          city: string | null;
          country: string | null;
        };
        category: string[];
      }[];
      total: number;
      limit: number;
      page: number;
      pages: number;
    };
    dateTime: {
      date: string;
      timezone_type: number;
      timezone: string;
    };
  }

  export interface JobState {
    jobs : {
        data: JobResponse | null;
        isLoading: boolean;
        error: string | null;
    }

  }
  export interface JobReducer {
        data: JobResponse | null;
        isLoading: boolean;
        error: string | null;
  }

  export interface job{
    job:{
      uuid: string;
      title: string;
      company_uuid: string;
      url: string;
      is_top: boolean;
      gpa: number;
      years_of_experience: number[];
      geolocation: {
        latitude: number;
        longitude: number;
      };
      willing_to_travel: boolean;
      willing_to_relocate: boolean;
      owns_a_car: boolean;
      visa_sponsorship: boolean;
      salary: {
        min: number | string;
        max: number | string;
      };
      gender: string | null;
      description: string | null;
      requirements: string | null;
      translations: any[];
      skills: string[];
      uri: string;
      posted_at: string;
      score: number;
      is_applied: boolean;
      applied_at: string | null;
      outside: boolean;
      has_profile: boolean;
      outside_key: string | null;
      hidden_columns: string[];
      job_type: string[];
      degree: string[];
      industry: string[];
      major: string[];
      nationality: string[];
      career_level: string[];
      languages: string[];
      location: {
        city: string | null;
        country: string | null;
      };
      category: string[];
    };
  }