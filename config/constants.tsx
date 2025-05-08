const BACKEND_API = {
  BASE_URL_USER_MANAGER: `http://20.126.3.61:8014/`,
  BASE_URL_CASH_REQUEST: `http://20.126.3.61:8010/`,
  BASE_URL_CONFIG: `http://20.126.3.61:8005/`,
  LOGIN: `http://20.126.3.61:3400/user-manager/user/mobile_login`,
  CHECK_OTP: `http://20.126.3.61:3400/user-manager/user/checkOTP`,
  CREATE_OTP: `/user-manager/user/checkOTP`,
  GET_CASH_OFFICER: `user/get_by_username`,
  GET_DELIVERY_HISTORY: `http://20.126.3.61:3400/cit/cit-manifest/get_delivery_by_id_and_date_and_filter`,
  GET_PENDING_DELIVERY: `http://20.126.3.61:3400/cit/cit-manifest/get_pending_delivery_by_id`,
  GET_COMPLETED_DELIVERY: `http://20.126.3.61:3400/cit/cit-manifest/get_completed_delivery_by_id`,
  GET_BRANCH: `branch/get_branch_by_code`,
  DELIVER_REQUEST: `cash-request/deliver_request`,
};

const LOADING = require("../assets/images/loading.json");
const LOADING_TWO = require("../assets/images/loading2.json");

export enum CashRequestStatusEnum {
  Processing = -1,
  Withdrawn = -2,
  BranchRejected = -3,
  CMUDenied = -4,
  Denied = 0,
  Approved = 1,
  Dispatched = 2,
  Acknowledged = 3,
  InRoute = 4,
  BranchAccepted = 5,
  CMUApproved = 7,
  Delivered = 8,
  DispatchReady = 9,
  Returned = 10,
  ReturnToClient = 11,
  BranchRoute = 12,
}

export default { BACKEND_API, LOADING, LOADING_TWO };
