// authHooks.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/";
const API_URL = "http://localhost:3000";

// Axios instance with credentials
const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (credentials) => {
      const { data } = await axiosInstance.post("/auth/login", credentials);
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/chat");
    },
  });
};

export const useSignup = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (userData) => {
      const { data } = await axiosInstance.post("/auth/register", userData);
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/chat");
    },
  });
};

export const useGithubLogin = () => {
  return useMutation({
    mutationFn: async () => {
      window.location.href = `${API_URL}/auth/github`;
    },
  });
};

export const useGoogleLogin = () => {
  return useMutation({
    mutationFn: async () => {
      window.location.href = `${API_URL}/auth/google`;
    },
  });
};
