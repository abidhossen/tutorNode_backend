const created = (res: any, data: any, type: string) => {
  return res.status(201).json({
    success: true,
    message: `${type} created successfully`,
    data: data,
  });
};
const ok = (res: any, data: any) => {
  return res
    .status(200)
    .json({ success: true, message: 'Request successful', data: data });
};
const badRequest = (res: any, error: any) => {
  return res.status(400).json({
    success: false,
    message: 'Input or validation error',
    error: error.message || error,
  });
};
const unauthorized = (res: any, error: any) => {
  return res.status(401).json({
    success: false,
    message: 'Unauthorized access',
    error: error.message || error,
  });
};
const notFound = (res: any, error: any) => {
  return res.status(404).json({
    success: false,
    message: 'Resource not found',
    error: error.message || error,
  });
};
const forbidden = (res: any, error: any) => {
  return res.status(403).json({
    success: false,
    message: 'Forbidden access',
    error: error.message || error,
  });
};
const internalServerError = (res: any, error: any) => {
  return res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: error.message || error,
  });
};
export const response = {
  created,
  ok,
  badRequest,
  unauthorized,
  notFound,
  forbidden,
  internalServerError,
};
