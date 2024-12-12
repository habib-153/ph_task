import { Button, Row } from "antd";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";

const ChangePassword = () => {
    //const [changePassword] = useChangePasswordMutation();
    // const dispatch = useAppDispatch();  
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
      console.log(data);
  
      // const res = (await changePassword(data)) as TResponse<any>;
      // console.log(res?.data?.success);
      // if (res?.data?.success) {
      //   dispatch(logout());
      //   navigate('/login');
      // }
    };
    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="oldPassword" label="Old Password" />
        <PHInput type="text" name="newPassword" label="New Password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
    );
};

export default ChangePassword;