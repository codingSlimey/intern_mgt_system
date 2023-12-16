import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentLogin from "./pages/login/student/StudentLogin";
import StaffLogin from "./pages/login/staff/StaffLogin";
import StudentDash from "./pages/dashboard/STUDENT/StudentDash";
import StudentSignup from "./pages/signup/student/StudentSignup";
import StaffSignup from "./pages/signup/staff/StaffSignup";
import SignupSuccess from "./pages/signup/SignupSuccess";
import Logbook from "./pages/logbook/Logbook";
import AddLog from "./pages/logbook/AddLog";
import ViewLog from "./pages/logbook/ViewLog";
import StuProfile from "./pages/profile/student/StuProfile";
import CoodProfile from "./pages/profile/staff/CoodProfile";
import SupervisorProfile from "./pages/profile/staff/SupervisorProfile";
import CoordinatorDash from "./pages/dashboard/COORDINATOR/CoordinatorDash";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/student/login" element={<StudentLogin />} />
					<Route path="/student/signup" element={<StudentSignup />} />
					<Route path="/staff/login" element={<StaffLogin />} />
					<Route path="/staff/signup" element={<StaffSignup />} />
					<Route path="/student/profile" element={<StuProfile />} />
					<Route
						path="/signup/successful"
						element={
							<SignupSuccess
								text={"Account Created Successfully"}
								message={
									"Check your email to verify your account."
								}
							/>
						}
					/>
					<Route
						path="/student/dashboard"
						element={<StudentDash />}
					/>
					<Route path="/student/logbook" element={<Logbook />} />
					<Route path="/student/add/new/log" element={<AddLog />} />
					<Route path="/student/add/new/log" element={<AddLog />} />
					<Route path="/student/view-log" element={<ViewLog />} />
					<Route
						path="/coordinator/profile"
						element={<CoodProfile />}
					/>
					<Route
						path="/supervisor/profile"
						element={<SupervisorProfile />}
					/>
					<Route 
						path="/coordinator/dashboard" 
						element={<CoordinatorDash />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
