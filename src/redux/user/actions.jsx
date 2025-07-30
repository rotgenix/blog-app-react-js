import axios from "axios";
import { config } from "../../utils/config";
import { userActions } from "./slices";
import { loaderActions } from "../loader/slices";
// import { hideLoader, showLoader } from "../../utils/loader";

export const registerUser = (reqBody) => {
    return async (dispatch) => {
        try {
            console.log("7");
            console.log("reqBody:", reqBody);
            dispatch(loaderActions.showLoader());

            const { data } = await axios.post(
                `${config.BE_BASE_URL}/user/register-user`,
                { ...reqBody }
            );

            console.log("data:20:", data);
            console.log("data:20:", data?.data);

            dispatch(
                userActions.setUserData({
                    _id: data?.data?.user?._id,
                    name: data?.data.user.name,
                    email: data?.data.user.email,
                    mobileNo: data?.data.user.mobileNo,
                    profilePic: data?.data.user.profilePic,
                    categories: data?.data.user.categories,
                    token: data?.data.token,
                })
            );

            dispatch(
                userActions.setUserApiState({
                    // isLoading: false,
                    isError: false,
                    message: "",
                })
            );
        } catch (error) {
            console.log(error);
            dispatch(
                userActions.setUserApiState({
                    // isLoading: false,
                    isError: true,
                    message: error?.message || ""
                })
            );
        } finally {
            dispatch(loaderActions.hideLoader());
        }
    };
};

export const loginUser = (reqBody) => {
    return async (dispatch) => {
        try {
            console.log("reqBody:", reqBody);
            dispatch(loaderActions.showLoader());

            const { data } = await axios.post(
                `${config.BE_BASE_URL}/user/login-user`,
                { ...reqBody },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );

            console.log("data:71:", data);
            console.log("data:71:", data?.data);

            dispatch(
                userActions.setUserData({
                    _id: data?.data?.user?._id,
                    name: data?.data.user.name,
                    email: data?.data.user.email,
                    mobileNo: data?.data.user.mobileNumber || "",
                    profilePic: data?.data.user?.profilePic || "",
                    categories: data?.data.user?.categories || [],
                    token: data?.token,
                })
            );

            dispatch(
                userActions.setUserApiState({
                    success: true,
                    isError: false,
                    message: "Logged in Successfully.",
                })
            );
        } catch (error) {
            console.log(error);
            dispatch(
                userActions.setUserApiState({
                    // isLoading: false,
                    isError: true,
                    message: error?.message || ""
                })
            );
        } finally {
            dispatch(loaderActions.hideLoader());
        }
    };
};

export const authenticateUser = () => {
    return async (dispatch) => {
        try {
            dispatch(loaderActions.showLoader());

            const { data } = await axios.get(
                `${config.BE_BASE_URL}/user/authenticate-user`,
                {
                    withCredentials: true,

                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log("data:121:", data);
            console.log("data:122:", data?.data?.user);

            console.log({
                _id: data?.data?.user?._id || "",
                name: data?.data.user?.name || "",
                email: data?.data.user.email || "",
                mobileNo: data?.data.user.mobileNumber || "",
                profilePic: data?.data.user.profilePic || "",
                categories: data?.data.user.categories || [],
                token: data?.token || "",
            })
            dispatch(
                userActions.setUserData({
                    _id: data?.data?.user?._id || "",
                    name: data?.data.user?.name || "",
                    email: data?.data.user.email || "",
                    mobileNo: data?.data.user.mobileNumber || "",
                    profilePic: data?.data.user.profilePic || "",
                    categories: data?.data.user.categories || [],
                    token: data?.token || "",
                })
            );

            dispatch(
                userActions.setUserApiState({
                    // isLoading: false,
                    isError: false,
                    message: "",
                })
            );
        } catch (error) {
            console.log(error);
            dispatch(
                userActions.setUserApiState({
                    // isLoading: false,
                    isError: true,
                    message: error?.message || ""
                })
            );
        } finally {
            dispatch(loaderActions.hideLoader());
        }
    };
};