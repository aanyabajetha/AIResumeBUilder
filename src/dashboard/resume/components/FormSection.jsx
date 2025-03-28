import React, { useState, useEffect } from "react";
import PersonalDetail from "./forms/PersonalDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from 'lucide-react'
import Experience from "./forms/Experience";
import Education from "./forms/Education";
import Skills from "./forms/Skills";
import { Link, Navigate, useParams } from "react-router-dom";
import ThemeColor from "./ThemeColor";
import Summary from "./forms/Summary";


function FormSection() {
    const [activeFormIndex, setActiveFormIndex] = useState(1);
    const [enableNext, setEnableNext] = useState(false);
    const {resumeId} = useParams();

    const enabledNext = (value) => {
        setEnableNext(value);
    };

    // Reset enableNext when switching forms
    useEffect(() => {
        setEnableNext(false);
    }, [activeFormIndex]);

    const handleNext = () => {
        setActiveFormIndex(prev => prev + 1);
        setEnableNext(false);
    };

    const handleBack = () => {
        setActiveFormIndex(prev => prev - 1);
        setEnableNext(true);
    };

    const renderForm = () => {
        switch(activeFormIndex) {
            case 1:
                return <PersonalDetail enabledNext={enabledNext}/>;
            case 2:
                return <Summary enabledNext={enabledNext}/>;
            case 3:
                return <Experience enabledNext={enabledNext}/>;
            case 4:
                return <Education enabledNext={enabledNext}/>;
            case 5:
                return <Skills enabledNext={enabledNext}/>;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className="flex gap-5">
                    <Link to={"/dashboard"}>
                        <Button><Home /></Button>
                    </Link>
                    <ThemeColor/>
                </div>
                <div className="flex gap-2">
                    {activeFormIndex > 1 && (
                        <Button 
                            size="sm"
                            variant="outline"
                            onClick={handleBack}
                        >
                            <ArrowLeft />
                        </Button>
                    )}

                    <Button 
                        disabled={!enableNext}
                        variant="outline"
                        className="flex gap-2" 
                        size="sm"
                        onClick={handleNext}
                    >
                        Next<ArrowRight />
                    </Button>
                </div>
            </div>

            {activeFormIndex === 1 ? (
                <PersonalDetail enabledNext={setEnableNext} />
            ) : activeFormIndex === 2 ? (
                <Summary enabledNext={setEnableNext} />
            ) : activeFormIndex === 3 ? (
                <Experience enabledNext={setEnableNext} />
            ) : activeFormIndex === 4 ? (
                <Education enabledNext={setEnableNext} />
            ) : activeFormIndex === 5 ? (
                <Skills enabledNext={setEnableNext} />
            ) : activeFormIndex === 6 ? (
                <Navigate to={`/my-resume/${resumeId}/view`}/>
            ) : null}
        </div>
    );
}

export default FormSection
