import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';
import React from 'react';

const IndustryInsightsPage = async() => {

    const {isOnboarded}= await getUserOnboardingStatus();
    
      if(!isOnboarded)
        redirect("/onboarding")

    return (
        <div>
            <h1>Industry Insights</h1>
            <p>Welcome to the Industry Insights page. Here you will find the latest trends and analysis in the industry.</p>
        </div>
    );
};

export default IndustryInsightsPage;