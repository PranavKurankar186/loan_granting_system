import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Navigation from './components/Navigation';
import Footer1 from './components/Footer1';
import HomeScreen from './common/HomeScreen';
import LoginScreen from './common/LoginScreen';
import CustomerSignUp from './customer/CustomerSignUp';
import DisplayCustomer from './customer/DisplayCustomer';
import Axios from "axios"
import ApplyLoan from './customer/ApplyLoan';
import AdminDash from './admin/AdminDash';
import CustomerList from './admin/CustomerList';
import AppliedLoans from './customer/AppliedLoans';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoanOfficerList from './admin/LoanOfficerList';
import FieldOfficerList from './admin/FieldOfficerList';
import LoanRequestList from './admin/LoanRequestList';
import AssignLoanOfficer from './admin/AssignLoanOfficer'
import FeedbackQuestion from './admin/FeedbackQuestion';
import HelpList from './admin/HelpList';
import ListBackgroundVerification from './admin/ListBackgroundVerification';
import ListLoanVerification from './admin/ListLoanVerification';
import UpdateBackgroundVerification from './admin/UpdateBackgroundVerification';
import UpdateLoanVerification from './admin/UpdateLoanVerification';
import UserFeedback from './admin/UserFeedback';
import ForgotPassword from './common/ForgotPassword';
import SearchedUser from './admin/SearchedUser';
import OfficerSignUp from './loan officer/OfficerSignUp';
import HelpRequest from './customer/HelpRequest';
import LoanRequests from './customer/LoanRequests';
import HelpReport from './customer/HelpReport';
import FeedbackQuestion1 from './customer/FeedbackQuestions1';

import LoanOfficerDash from './loan officer/LoanOfficerDash';
import FieldOfficerDash from './fieldOfficer/FieldOfficerDash';
import LogoutScreen from './common/LogoutScreen';
import FieldLoanRequests from './fieldOfficer/FieldLoanRequest';
import AssignBGVFList from './fieldOfficer/AssignBGVFList';
import UpdateBGVF from './fieldOfficer/UpdateBGVF';
import UpdateBGVFList from './fieldOfficer/updateBGVFList';
import FieldHelpReport from './fieldOfficer/FieldHelpReport';
import FieldHelpRequest from './fieldOfficer/FieldHelpRequest';
import LoanOfficerLoanRequest from './loan officer/LoanOfficerLoanRequest';
import AssignLVFList from './loan officer/AssignLVFList';
import UpdateLVF from './loan officer/UpdateLVF';
import UpdateLVFList from './loan officer/UpdateLVFList';
import LoanHelpReport from './loan officer/LoanHelpReport';
import LoanHelpRequest from './loan officer/LoanHelpRequest';
import AddFeedback from './admin/AddFeedback';
import AssignFieldOfficer from './admin/AssignFieldOfficer';
import ContactUs from './common/ContactUs';
import ImageTest from './fieldOfficer/ImageTest';
import ViewReport from './fieldOfficer/ViewReport';
import UploadDocument from './customer/UploadDocument';
import ViewResume from './admin/ViewResume';
import ViewProjectFile from './admin/ViewProjectFile';
import ViewPersonalCredit from './admin/ViewPersonalCredit';
import ViewBussinessCredit from './admin/ViewBussinessCredit';
import ViewFinancialStatement from './admin/ViewFinancialStatement';
import ViewBankStatment from './admin/ViewBankStatment';
import ViewLoanReport from './loan officer/ViewLoanReport';
import ViewAdminReport from './admin/ViewAdminReport';
import ViewFieldReport from './admin/ViewFieldReport';
// import AddComment from './admin/AddComment';

// import {QueryClient, QueryClientProvider} from 'react-query'

// const queryClient = new QueryClient()

function App() {
  return (
    
    <>
     <div className="App">
     {/* <BrowserRouter> */}
      {/* <Navigation /> */}
      <Routes>
      {/* <QueryClientProvider client={queryClient}> */}
        <Route exact path='/' element={<HomeScreen />} />
        <Route path='/loginScreen' element={<LoginScreen />} />
        <Route path='/customerSignUp' element={<CustomerSignUp />} />
        <Route path='/displayCustomer' element={<DisplayCustomer />} />
        <Route path='/applyLoan' element={<ApplyLoan />} />
        <Route path='/admindash' element={<AdminDash />} />
        <Route path='/customerlist' element={<CustomerList />} />
        <Route path='/appliedLoan' element={<AppliedLoans />} />
        <Route path='/loanofficerlist' element={<LoanOfficerList />} />
        <Route path='/fieldofficerlist' element={<FieldOfficerList />} />
        <Route path='/loanrequestlist' element={<LoanRequestList />} />
        <Route path='/assignloanofficer' element={<AssignLoanOfficer/>} />
        <Route path='/feedbackquestion' element={<FeedbackQuestion/>} />
        <Route path='/helplist' element={<HelpList/>} />
        <Route path='/listbgvfo' element={<ListBackgroundVerification/>} />
        <Route path='/listlvfo' element={<ListLoanVerification/>} />
        <Route path='/updatebgvfo' element={<UpdateBackgroundVerification/>} />
        <Route path='/updatelvfo' element={<UpdateLoanVerification/>} />
        <Route path='/userfeedback' element={<UserFeedback/>} />
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/searched-user-list' element={<SearchedUser/>}/>
        <Route path='/loan-officer-signup' element={<OfficerSignUp/>} />
        <Route path='/helpRequest' element={<HelpRequest/>} />
        <Route path='/loanRequest' element={<LoanRequests />} />
        <Route path='/helpReport' element={<HelpReport/>} />
        <Route path='/feedbackQuestions' element={<FeedbackQuestion1/>} />
        {/* <Route path='/addFeedback' element={<AddFeedback/>}/> */}
        <Route path='/loanofficerdash' element={<LoanOfficerDash/>}/>
        <Route path='/fieldofficerdash' element={<FieldOfficerDash/>}/>
        <Route path='/OfficerSignUp' element={<OfficerSignUp/>}/>
        <Route path='/logout' element={<LogoutScreen/>}/>
        <Route path='/FieldLoanRequest' element={<FieldLoanRequests/>}/>
        <Route path='/assignBGVF' element={<AssignBGVFList/>}/>
        <Route path='/updateBGVF' element={<UpdateBGVF/>}           />
        <Route path='/updateBGVFList' element={<UpdateBGVFList/>}/>
        <Route path='/fieldofficerhelpReport' element={<FieldHelpReport/>} />
        <Route path='/fieldofficerhelpRequest' element={<FieldHelpRequest/>} />
        <Route path='/loanOfficerRequests' element={<LoanOfficerLoanRequest/>}/>
        <Route path='/assignLVF' element={<AssignLVFList/>}/>
        <Route path='/updateLVF' element={<UpdateLVF/>}/>
        <Route path='/updateLVFList' element={<UpdateLVFList/>}/>
        <Route path='/loanhelpReport' element={<LoanHelpReport/>}/>
        <Route path='/loanhelpRequest' element={<LoanHelpRequest/>}/>
        <Route path='/addFeedback' element={<AddFeedback/>}/>
        <Route path='/assignfieldofficer' element={<AssignFieldOfficer/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/imageBGVF' element={<ImageTest/>}/>
        <Route path='viewReport' element={<ViewReport/>}/>
        <Route path='/upload' element={<UploadDocument/>} />
        <Route path='/viewResume' element={<ViewResume/>} />
        <Route path='/viewProject' element={<ViewProjectFile/>} />
        <Route path='/viewPersonalCredit' element={<ViewPersonalCredit/>} />
        <Route path='/viewBusinessCredit' element={<ViewBussinessCredit/>} />
        <Route path='/viewFinancial' element={<ViewFinancialStatement/>} />
        <Route path='/viewBankStatement' element={<ViewBankStatment/>} />
        <Route path='viewLoanReport' element={<ViewLoanReport/>}></Route>
        <Route path='viewLoanReportAdmin' element={<ViewAdminReport/>}></Route>
        <Route path='viewFieldReportAdmin' element={<ViewFieldReport/>}></Route>
        {/* <Route peth='addComment' element={AddComment}/> */}
        {/* </QueryClientProvider> */}
      </Routes>

      <ToastContainer theme="colored" />
       <Footer1 /> 
      {/* </BrowserRouter> */}
      
      </div>
     </>
   
  );
}

export default App;

