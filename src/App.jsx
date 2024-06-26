import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar';
import Calculator from "./pages/CalculatorPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ConversionPage from "./pages/CategoryPages/Conversion/ConversionPage";
import KinEnergyEqvSpeedLGPage from "./pages/CategoryPages/KinEnergyEqvSpeedLG/KinEnergyEqvSpeedLGPage";
import SpeedAndVelocityPage from "./pages/CategoryPages/Conversion/FormulaPage/SpeedAndVelocityPage";
import SpeedVelocitySlidingToStop from "./pages/CategoryPages/KinEnergyEqvSpeedLG/FormulaPage/SpeedVelocitySlidingToStopPage";
import GradeAndSuperElevationPage from "./pages/CategoryPages/GradeAndSuperElevation/GradeAndSuperElevationPage";
import PercentGradePage from "./pages/CategoryPages/GradeAndSuperElevation/FormulaPage/PercentGradePage";
import PercentSuperelevationPage from "./pages/CategoryPages/GradeAndSuperElevation/FormulaPage/PercentSuperelevationPage";
import EDRPage from "./pages/CategoryPages/EDR/EDRPage";
import SpeedAtImpactPage from "./pages/CategoryPages/EDR/FormulaPage/SpeedAtImpactPage";
import ConstUniAvgEquationPage from "./pages/CategoryPages/ConstUniAvgEquation/ConstUniAvgEquationPage";
import ConstantDistancePage from "./pages/CategoryPages/ConstUniAvgEquation/FormulaPage/ConstantDistancePage";
import ConstantVelocityPage from "./pages/CategoryPages/ConstUniAvgEquation/FormulaPage/ConstantVelocityPage";
import ConstantTimePage from "./pages/CategoryPages/ConstUniAvgEquation/FormulaPage/ConstantTimePage";
import SlidetoStopDistWithDragPage from "./pages/CategoryPages/ConstUniAvgEquation/FormulaPage/SlidetoStopDistWithDragPage"
import SpeedAtImpactResultsPage from "./pages/CategoryPages/EDR/FormulaPage/SpeedAtImpactResultsPage";
import CenterOfMassEquationPage from "./pages/CategoryPages/CenterOfMassEquation/CenterOfMassEquationPage";
import COMLateralPage from "./pages/CategoryPages/CenterOfMassEquation/FormulaPage/COMLateralPage";
import COMLongitudinalPage from "./pages/CategoryPages/CenterOfMassEquation/FormulaPage/COMLongitudinalPage";
import RadiusCalculationPage from "./pages/CategoryPages/RadiusCalculation/RadiusCalculationPage";
import AcceDeceRatePage from "./pages/CategoryPages/AcceDeceRate/FormulaPage/AcceDeceRatePage.jsx";
import KinEnergyAndWorkPage from "./pages/CategoryPages/KinEnergyAndWork/KinEnergyAndWorkPage.jsx";
import KinEnergyCalPage from "./pages/CategoryPages/KinEnergyAndWork/KinEnergyCalPage.jsx";
import KinEnergyWithMassVelPage from "./pages/CategoryPages/KinEnergyAndWork/FormulaPage/KinEnergyWithMassVelPage.jsx";
import KinEnergyWithWeightSpdOrVelPage from "./pages/CategoryPages/KinEnergyAndWork/FormulaPage/KinEnergyWithWeightSpdOrVelPage.jsx";
import WorkCalPage from "./pages/CategoryPages/KinEnergyAndWork/WorkCalPage.jsx";
import WorkWithForceAndDistPage from "./pages/CategoryPages/KinEnergyAndWork/FormulaPage/WorkWithForceAndDistPage.jsx";
import WorkWithWeightAndDistPage from "./pages/CategoryPages/KinEnergyAndWork/FormulaPage/WorkWithWeightAndDistPage.jsx";
import MphAndFpsDueToKEPage from "./pages/CategoryPages/KinEnergyAndWork/FormulaPage/MphAndFpsDueToKEPage.jsx";
import TimeAndDistancePage from "./pages/CategoryPages/TimeAndDistanceEquations/TimeAndDistanceEquationsPage.jsx";
import GravityAndVelocityPage from "./pages/CategoryPages/TimeAndDistanceEquations/FormulaPage/GravityAndVelocityPage.jsx"; 
import AccAndDecRatePage from "./pages/CategoryPages/TimeAndDistanceEquations/FormulaPage/AccAndDecRatePage.jsx";
import ProjectionEfficiencyPage from "./pages/CategoryPages/PedestrianOrBicycleProjectionEfficiency/ProjectionEfficiencyPage.jsx";
import VelocityAndAccelerationPage from "./pages/CategoryPages/TimeAndDistanceEquations/FormulaPage/VelocityAndAccelerationPage.jsx";
import AccFromOneSpeedToAnotherPage from "./pages/CategoryPages/TimeAndDistanceEquations/FormulaPage/AccFromOneSpeedToAnotherPage.jsx";
import DistanceToAccOrDecPage from "./pages/CategoryPages/TimeAndDistanceEquations/FormulaPage/DistanceToAccOrDecPage.jsx";
import TimeForVehicleToStopPage from "./pages/CategoryPages/TimeAndDistanceEquations/FormulaPage/TimeForVehicleToStopPage.jsx";
import DistanceObjectTraveledWithKnownAccDecRatePage from "./pages/CategoryPages/TimeAndDistanceEquations/FormulaPage/DistanceObjectTraveledWithKnownAccDecRatePage.jsx";
import DistanceObjectTraveledWithKnownAccDecFactorPage from "./pages/CategoryPages/TimeAndDistanceEquations/FormulaPage/DistanceObjectTraveledWithKnownAccDecFactorPage.jsx";
import VelocityDuringAccDecRatePage from "./pages/CategoryPages/TimeAndDistanceEquations/FormulaPage/VelocityDuringAccDecRatePage.jsx";
import VelocityDuringAccDecFactorPage from "./pages/CategoryPages/TimeAndDistanceEquations/FormulaPage/VelocityDuringAccDecFactorPage.jsx";
import VelocityAtDistanceFromAccDecFactorPage from "./pages/CategoryPages/TimeAndDistanceEquations/FormulaPage/VelocityAtDistanceromAccDecFactorPage.jsx";
import VelocityAtDistanceFromAccDecRatePage from "./pages/CategoryPages/TimeAndDistanceEquations/FormulaPage/VelocityAtDistanceFromAccDecRatePage.jsx";
import ChangeInVelocitySpeedScalar from "./pages/CategoryPages/ChangeInVelocitySpeedScalar/ChangeInVelocitySpeedScalarPage.jsx";
import ChangeInSpeedUsingBetaPage from "./pages/CategoryPages/ChangeInVelocitySpeedScalar/FormulaPage/ChangeInSpeedUsingBetaPage.jsx";
import ChangeInSpeedVehicle1Page from "./pages/CategoryPages/ChangeInVelocitySpeedScalar/FormulaPage/ChangeInSpeedVehicle1Page.jsx";
import ChangeInSpeedVehicle2Page from "./pages/CategoryPages/ChangeInVelocitySpeedScalar/FormulaPage/ChangeInSpeedVehicle2Page.jsx";
import ChangeInVelocityUsingBetaPage from "./pages/CategoryPages/ChangeInVelocitySpeedScalar/FormulaPage/ChangeInVelocityUsingBetaPage.jsx";
import ChangeInVelocityVehicle1Page from "./pages/CategoryPages/ChangeInVelocitySpeedScalar/FormulaPage/ChangeInVelocityVehicle1Page.jsx";
import ChangeInVelocityVehicle2Page from "./pages/CategoryPages/ChangeInVelocitySpeedScalar/FormulaPage/ChangeInVelocityVehicle2Page.jsx";
import VectorSumAnalysisPage from "./pages/CategoryPages/VectorSumAnalysis/VectorSumAnalysisPage.jsx";
import XMomentumPage from "./pages/CategoryPages/VectorSumAnalysis/FormulaPages/XMomentumPage.jsx";
import YMomentumPage from "./pages/CategoryPages/VectorSumAnalysis/FormulaPages/YMomentumPage.jsx";
import ResultantXMomentumPage from "./pages/CategoryPages/VectorSumAnalysis/FormulaPages/ResultantXMomentumPage.jsx";
import ResultantYMomentumPage from "./pages/CategoryPages/VectorSumAnalysis/FormulaPages/ResultantYMomentumPage.jsx";
import TotalMomentumFromVectorPage from "./pages/CategoryPages/VectorSumAnalysis/FormulaPages/TotalMomentumFromVectorPage.jsx"
import MomentumFromWeightPage from "./pages/CategoryPages/VectorSumAnalysis/FormulaPages/MomentumFromWeightPage.jsx"
import TotalMomentumAlongXPage from "./pages/CategoryPages/VectorSumAnalysis/FormulaPages/TotalMomentumAlongXPage.jsx"
import SpeedVehicle1Page from "./pages/CategoryPages/VectorSumAnalysis/FormulaPages/SpeedVehicle1Page.jsx"
import SpeedVehicle2Page from "./pages/CategoryPages/VectorSumAnalysis/FormulaPages/SpeedVehicle2Page.jsx"


function App() {

    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage/>} />

                    {/* Main Pages*/}
                    <Route path="/Calculator" element={<Calculator/>} />
                    <Route path="/HomePage" element={<HomePage/>} />
                    <Route path="/SearchPage" element={<SearchPage/>} />

                    {/* Conversion */}
                    <Route path="/Conversions" element={<ConversionPage/>} />
                    <Route path="/Conversions/SpeedAndVelocity" element={<SpeedAndVelocityPage/>} />


                    {/*Kinematic Energy Equivalent */}
                    <Route path="/KinEnergyEqvSpeedLGPage" element={<KinEnergyEqvSpeedLGPage/>} />
                    <Route path="/SpeedVelocitySlidingToStopPage" element={<SpeedVelocitySlidingToStop/>} />

                    {/* Grade and Super elevation */}
                    <Route path="/GradeAndSuperElevationPage" element={<GradeAndSuperElevationPage/>} />
                    <Route path="/PercentGradePage" element={<PercentGradePage/>} />
                    <Route path="/PercentSuperelevationPage" element={<PercentSuperelevationPage/>} />

                    {/* EDR */}
                    <Route path="/EDR" element={<EDRPage/>} />
                    <Route path="/EDR/SpeedAtImpact" element={<SpeedAtImpactPage />} />
                    <Route path="/EDR/SpeedAtImpact/Results" element={<SpeedAtImpactResultsPage />} />

                    {/* Constant Uniform Acceleration Equations */}
                    <Route path="/ConstUniAvgEquationPage" element={<ConstUniAvgEquationPage />} />
                    <Route path="/ConstantVelocityPage" element={<ConstantVelocityPage />} />
                    <Route path="/ConstantTimePage" element={<ConstantTimePage />} />
                    <Route path="/ConstantDistancePage" element={<ConstantDistancePage />} />
                    <Route path="/SlidetoStopDistWithDragPage" element={<SlidetoStopDistWithDragPage />} />

                    {/* Center of Mass Equations */}
                    <Route path="/CenterOfMassEquationPage" element={<CenterOfMassEquationPage />} />
                    <Route path="/COMLateralPage" element={<COMLateralPage />} />
                    <Route path="/COMLongitudinalPage" element={<COMLongitudinalPage />} />

                    {/*Radius Calculation*/}
                    <Route path="/RadiusCalculationPage" element={<RadiusCalculationPage />} />

                    <Route path={"/AcceDeceRatePage"} element={<AcceDeceRatePage />} />

                    {/*Kinetic Energy and Work*/}
                    <Route path={"/KinEnergyAndWorkPage"} element={<KinEnergyAndWorkPage />} />
                    <Route path={"/KinEnergyCalPage"} element={<KinEnergyCalPage />} />
                    <Route path={"/KinEnergyWithMassVelPage"} element={<KinEnergyWithMassVelPage />} />
                    <Route path={"/KinEnergyWithWeightSpdOrVelPage"} element={<KinEnergyWithWeightSpdOrVelPage />} />
                    <Route path={"/WorkCalPage"} element={<WorkCalPage />} />
                    <Route path={"/WorkWithWeightAndDistPage"} element={<WorkWithWeightAndDistPage />} />
                    <Route path={"/WorkWithForceAndDistPage"} element={<WorkWithForceAndDistPage />} />
                    <Route path={"/MphAndFpsDueToKEPage"} element={<MphAndFpsDueToKEPage />} /> 

                    {/*Time and Distance Equations*/}
                    <Route path={"/TimeAndDistanceEquationsPage"} element={<TimeAndDistancePage />} />
                    <Route path={"/GravityAndVelocityPage"} element={<GravityAndVelocityPage />} />
                    <Route path={"/AccAndDecRatePage"} element= {<AccAndDecRatePage />} />
                    <Route path ={"/VelocityAndAccelerationPage"} element= {<VelocityAndAccelerationPage />} />
                    <Route path ={"/AccFromOneSpeedToAnotherPage"} element= {<AccFromOneSpeedToAnotherPage />} />
                    <Route path ={"/DistanceToAccOrDecPage"} element= {< DistanceToAccOrDecPage />} />
                    <Route path ={"/TimeForVehicleToStopPage"} element= {< TimeForVehicleToStopPage />} />
                    <Route path ={"/DistanceObjectTraveledWithKnownAccDecRatePage"} element= {< DistanceObjectTraveledWithKnownAccDecRatePage />} />
                    <Route path ={"/DistanceObjectTraveledWithKnownAccDecFactorPage"} element= {<DistanceObjectTraveledWithKnownAccDecFactorPage />} />
                    <Route path ={"/VelocityDuringAccDecRatePage"} element= {<VelocityDuringAccDecRatePage />} />
                    <Route path ={"/VelocityDuringAccDecFactorPage"} element= {<VelocityDuringAccDecFactorPage />} />
                    <Route path ={"/VelocityAtDistanceFromAccDecRatePage"} element= {<VelocityAtDistanceFromAccDecRatePage />} />
                    <Route path ={"/VelocityAtDistanceFromAccDecFactorPage"} element= {<VelocityAtDistanceFromAccDecFactorPage />} />

                    {/*Change In Velocity Speed Scalar*/}
                    <Route path={"/ChangeInVelocitySpeedScalarPage"} element={<ChangeInVelocitySpeedScalar />} />
                    <Route path={"/ChangeInSpeedUsingBetaPage"} element={<ChangeInSpeedUsingBetaPage />} />
                    <Route path={"/ChangeInSpeedVehicle1Page"} element={<ChangeInSpeedVehicle1Page />} />
                    <Route path={"/ChangeInSpeedVehicle2Page"} element={<ChangeInSpeedVehicle2Page />} />
                    <Route path={"/ChangeInVelocityUsingBetaPage"} element={<ChangeInVelocityUsingBetaPage />} />
                    <Route path={"/ChangeInVelocityVehicle1Page"} element={<ChangeInVelocityVehicle1Page />} />
                    <Route path={"/ChangeInVelocityVehicle2Page"} element={<ChangeInVelocityVehicle2Page />} />

                    {/*Vector Sum Analysis*/}
                    <Route path={"/VectorSumAnalysisPage"} element={<VectorSumAnalysisPage />} />
                    <Route path={"/XMomentumPage"} element={<XMomentumPage />} />
                    <Route path={"/YMomentumPage"} element={<YMomentumPage />} />
                    <Route path={"/ResultantXMomentumPage"} element={<ResultantXMomentumPage />} />
                    <Route path={"/ResultantYMomentumPage"} element={<ResultantYMomentumPage />} />
                    <Route path={"/TotalMomentumFromVectorPage"} element={<TotalMomentumFromVectorPage />} />
                    <Route path={"/MomentumFromWeightPage"} element={<MomentumFromWeightPage />} />
                    <Route path={"/TotalMomentumAlongXPage"} element={<TotalMomentumAlongXPage />} />
                    <Route path={"/SpeedVehicle1Page"} element={<SpeedVehicle1Page />} />
                    <Route path={"/SpeedVehicle2Page"} element={<SpeedVehicle2Page />} />
                    
                    {/*Projection Efficiency */}
                    <Route path="/ProjectionEfficiencyPage" element ={<ProjectionEfficiencyPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
