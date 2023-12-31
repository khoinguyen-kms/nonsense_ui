import { useAtom } from "jotai";
import { ChangeEvent, FC, MouseEvent } from "react";
import { toast } from "react-toastify";
import { authAtom } from "../../atoms/authAtom";
import { POST } from "../../utils/api";
import { saveToLocalStorage } from "../../utils/localStorageUtils";
import { useNavigate } from "react-router-dom";

const LoginPage: FC = () => {

  const [credentialsPayload, setCredentialsPayload] = useAtom(authAtom);
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    setCredentialsPayload((change) => ({ ...change, [key]: e.target.value }));
  }

  const handleLogin = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();

    const response: any = await POST('/login', credentialsPayload);
    if (response.statusCode === 200) {
      const { accessToken, refreshToken } = response.data;
      saveToLocalStorage('accessToken', accessToken);
      saveToLocalStorage('refreshToken', refreshToken);

      navigate('/')
      toast.success("Login successfully");
    }
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  required
                  onChange={(e) => handleInputChange(e, 'username')}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  onChange={(e) => handleInputChange(e, 'password')}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={(e) => handleLogin(e)}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage;
