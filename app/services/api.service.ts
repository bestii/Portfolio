import { API_BASE_URL } from '@/app/settings';
import { FormSubmissionRequest } from '@/types';
import axios from 'axios';

export const getAboutMe = (): Promise<Response> => {
  return fetch(`${API_BASE_URL}/about`);
};

export const getContact = (): Promise<Response> => {
  return fetch(`${API_BASE_URL}/contact`);
};

export const getExperience = (): Promise<Response> => {
  return fetch(`${API_BASE_URL}/experience`);
};

export const getIntroduction = (): Promise<Response> => {
  return fetch(`${API_BASE_URL}/introduction`);
};

export const getServices = (): Promise<Response> => {
  return fetch(`${API_BASE_URL}/services`);
};

export const postFormSubmission = (
  body: FormSubmissionRequest
): Promise<Response> => {
  return axios.post(`${API_BASE_URL}/email`, body);
};
