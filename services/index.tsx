import axios from "axios";
import constants from "../config/constants";

const ApiUserManager = axios.create({
  baseURL: constants.BACKEND_API.BASE_URL_USER_MANAGER,
});

const ApiCashRequest = axios.create({
  baseURL: constants.BACKEND_API.BASE_URL_CASH_REQUEST,
});

interface deliverRequest {
  order_code: string;
  signature: string;
  cash_officer_username: string;
  amount_delivered: number;
}

const config = {
  headers: { Authorization: `Bearer ${global?.token}` },
};
class AuthService {
  static async Login(user: any) {
    if (!user?.email || !user?.password) {
      return { status: true, message: "Please enter email and password" };
    }
    try {
      let requestBody = {
        email: user?.email,
        password: user?.password,
      };
      console.log(requestBody , "requestBody");
      console.log(constants.BACKEND_API.LOGIN, "url");
      let response = await ApiUserManager.post(
        constants.BACKEND_API.LOGIN,
        requestBody
      );
      console.log(response, "response");
      return response?.data;
    } catch (error) {
      console.log(error, 'meee');
      return {
        status: false,
        message: "Oops, Something went wrong. Try again",
      };
    }
  }

  static async deliverRequest(requestBody: deliverRequest) {
    console.log(global.token);

    try {
      let response = await ApiCashRequest.put(
        constants.BACKEND_API.DELIVER_REQUEST,
        requestBody,
        config
      );
      return response?.data;
    } catch (error) {
      console.log(error);
      return { staus: false, message: "Oops, Something went wrong. Try again" };
    }
  }

  static async checkOTP(otp: number) {
    if (!otp) {
      return { staus: false, message: "Please enter OTP" };
    }
    try {
      let requestBody = {
        otp_number: otp,
      };
      let response = await ApiUserManager.post(
        `${constants.BACKEND_API.CHECK_OTP}`,
        requestBody,
        config
      );
      return response?.data;
    } catch (error) {
      console.log(error, 'hmmm');
      return { staus: false, message: "Oops, Something went wrong. Try again" };
    }
  }

  static async createOTP(user_id: number) {
    try {
      let response = await ApiUserManager.post(
        `${constants.BACKEND_API.CREATE_OTP}/${user_id}`,
        config
      );
      return response?.data;
    } catch (error) {
      console.log(error);
      return { staus: false, message: "Oops, Something went wrong. Try again" };
    }
  }

  static async getDeliveryHistory(id: number, date: string) {
    try {
      let response = await ApiCashRequest.get(
        `${constants.BACKEND_API.GET_DELIVERY_HISTORY}/${id}/${date}`,
        config
      );
      return response?.data;
    } catch (error) {
      console.log(error);
      return { staus: false, message: "Oops, Something went wrong. Try again" };
    }
  }

  static async getPendingDelivery(id: number, date: string) {
    try {
      let response = await ApiCashRequest.get(
        `${constants.BACKEND_API.GET_PENDING_DELIVERY}/${id}/${date}`,
        config
      );
      return response?.data;
    } catch (error) {
      console.log(error);
      return { staus: false, message: "Oops, Something went wrong. Try again" };
    }
  }

  static async getCompletedDelivery(id: number, date: string) {
    try {
      let response = await ApiCashRequest.get(
        `${constants.BACKEND_API.GET_COMPLETED_DELIVERY}/${id}/${date}`,
        config
      );
      return response?.data;
    } catch (error) {
      console.log(error);
      return { staus: false, message: "Oops, Something went wrong. Try again" };
    }
  }

  static async getBranchName(code: string) {
    try {
      let response = await axios.get(
        `http://20.126.3.61:8005/branch/get_branch_by_code/${+code}`,
        config
      );
      return response?.data;
    } catch (error) {
      console.log(error);
      return { staus: false, message: "Oops, Something went wrong. Try again" };
    }
  }

  static async getCashOfficer(username: string) {
    try {
      let response = await axios.get(
        `http://20.126.3.61:8014/user/get_by_username/${username}`,
        config
      );
      return response?.data;
    } catch (error) {
      console.log(error);
      return { staus: false, message: "Oops, Something went wrong. Try again" };
    }
  }

  static async getRequestDetail(requestId: number, type: string) {
    try {
      let response;
      if (type == "evacuation") {
        response = await axios.get(
          `http://20.126.3.61:8010/cash-evacuation/get_by_id/${requestId}`,
          config
        );
      } else {
        response = await axios.get(
          `http://20.126.3.61:8010/cash-request/get_by_id/${requestId}`,
          config
        );
      }
      return response?.data;
    } catch (error) {
      console.log(error);
      return { staus: false, message: "Oops, Something went wrong. Try again" };
    }
  }
}

export default AuthService;
