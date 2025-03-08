import { industries } from '@/data'
import React from 'react'
import OnboardingForm from './_components/onboarding-form'
import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'

type Props = {}

const onboardingPage = async(props: Props) => {

  const {isOnboarded}= await getUserOnboardingStatus();

  if(isOnboarded)
    redirect("/dashboard")


  return (
    <main>
      <OnboardingForm industries = {industries}/>
    </main>
  )
}

export default onboardingPage