const liveIP = 'https://keywegram.herokuapp.com'
 
import axios from 'axios';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = liveIP;
axios.defaults.xsrfCookieName = "CSRF-TOKEN";
axios.defaults.xsrfHeaderName = "X-CSRF-Token";
axios.defaults.timeout = 5000;
 
axios.interceptors.request.use(
    async config => {
      // add Bearer to request
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndqZHJoa2Q0NTZAZ21haWwuY29tIiwicG9zdHMiOltdLCJzdG9yaWVzIjpbXSwiand0Q291bnQiOjIsIl9pZCI6IjYxN2EzNmM3MjA5YTM5NWI5ODY1NmQ4NiIsImhhc2giOiJlODI4MjkwM2IxNjNmMjRhZThkNmZkYTM3ODdiOTA5NGJjZWVlMjQxODY3ZTMwN2MxMTRkNzljMjMwY2Q2MTNhMGQxMTg3MmYzY2FkNzdiZGQwZjMwY2VhMThkMGE3YmYyMTMyMThhZDMzM2E1YzIyZDgwYTU5OWJkMjFmNzhhOThkN2Y0YTgxZjAwNDQxNWI2YjNkZjE2YmRmOWE1ZTA2MDhiYmYxNDVkMTc4ODhiMjQ2NjZmNWZmMTNjNjJkODM0YmIyNWUwZDEzNjI2N2FjNjM1NzYwNWVjYWRlNTVmODBlNDQ1ZmNiMzRhYmU3NDgzMjc0YjY2Njc0NjNmYTcwODQzZDg0YjIyY2ExMmM2MDFlZjYzNDRkMGZlMzliZDc1ODRjZmJmOTVjOTczM2MxMzRmZGMwNGU1ZTkxNjIyZTdjMmRjODZkNWE5YTc4ZDkxMDgyOTBmZGFkYzRmMmE4MDc5NTk4OWMwMjQyYjdhZjYzOTVmN2E3ZmMzYTljNWY1MTgzMmRjODg4NTU2OWI4M2YzODVhZmYzZWU5YzZlNzI3YjQzMzg2YTAzZTMwODZmYzIxYWFjZmM4ZmNhM2ZhZjhlMjkyMjhkNDE0ZGY2YTBlZDQzOThiZmNkMjM5NzcwOWYzYjg3ZjE3ODExMDljM2ZkMTZmMmEwODc3N2FmMGRjMDI5MjE2NzFhODIwNjA4YWZiMzVmYzBkNzFlYTQwZGNjYzNjMDRmMmFjNjQ3Zjk3ZjNjODZiMTQwYjFhNjIxZThmY2YxYjQ3YmY4NWE2OWVkY2Q2MjFiOGFiYWFiZmZmNzBkMTA5ZWVlYmIwOWU5YzU5OTdhOTBhNzcyOTc4YzRhMzNlMjE0Y2VhNmViMTljZmEzOTRkZTQ4NzhlOGYyYWI3MzQ5MWMzYmU2NDI4NjZhMGExMjA1Mzk4NjMyYWM1MjYwYjgyOTM2MWU3ZTZmOTRjMzk0MWJlNmU3YjM4MjZhNTAwMDVkNjcyNDk2YWY3YjQ5MWIxNTBmMGRjMDY3ZjliODlmYWQyYjg2OGE2NjgxNmVkNTJmOTViODY2ZjRmZDU5YmU4YzA2MzUzYjViYTEwYjdkMTVjNTQ5ZmQwODhiOWU3NWE2YzZhNGVhMmZmNDk1ZTUwNzRiMjIzZDcwM2I2NGQ1ZDA2OGI5YzBmMmUxODI0OTQ4ZmZjNDg1M2QxYWQyYzc3NmZjZjU1NTA0NTI3ZjVhYWE2ZDQzYzBmNTBjMGZlYWQzN2NhZGIzNTIzMGJhMmE4NTk0YjdhZmUwZjhmY2FhN2IzNGU1ZTA2NDY1NjhjOWM2MGI5MDM4NzE0YTg3YThjOWI1MDU2OGE5MTI4NWZkMThkZWEzYmZkIiwic2FsdCI6ImM2YjkwNzYzNThiODgxYWZiZDM1ZWFkNjJhMmYxZTZhYjUxNTY2ZjRhMmYwZjA1NDgxYTgwYTY1MGE0Y2I5YjUiLCJfX3YiOjAsInJlZnJlc2giOnsic2VjcmV0IjoiMWM0ZGNmMDktOGZhMi00ZjU0LThhMjMtMTJmOTE4ZDQxMWFhIiwiZXhwaXJlcyI6MTYzNjYxMzI4NDUxMH0sImlhdCI6MTYzNTQwMzY4NCwiZXhwIjoxNjM2MDA4NDg0fQ.teOlW7La7MSqT1ntGyVzUlXv68kHVI5FCQM7qQo7epA"
      if (token){
          config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    error => {
      Promise.reject(error);
    }
  );
 
 
axios.interceptors.response.use(async (response) => {
    // Handles refresh token logic here
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return {status: 500,data: error};
});
 
export {axios}