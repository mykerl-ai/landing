<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="hero" class="w-full pb-8">
      <BaseSection>
        <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span data-aos="fade-right" data-aos-once="true" class="text-base text-gradient font-semibold uppercase"
            >Sign Up Today</span
          >
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            <span class="text-header-gradient">Stand Out </span> from the Crowd:
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" class="paragraph hidden sm:block">
            Experience the next generation of resume building with our advanced AI-powered platform.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <BaseButton
              class="max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white"
              @click="$router.push({ name: 'loginPage' })"
            >
              Get Started
            </BaseButton>
            <BaseButton
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
            >
              <span>Download App</span>
              <ChevronDownIcon :size="20" class="mt-1 text-[#0c66ee]" />
            </BaseButton>
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-6">
          <div class="w-full">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              :src="require('~/assets/img/resume_folder.gif')"
              class="-mt-4"
              alt=""
            />
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-1.png')"
          class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-2.png')"
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/ellipse-3.png')"
          class="hidden sm:block absolute bottom-56 right-24 w-6"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          :src="require('~/assets/img/pattern/star.png')"
          class="hidden sm:block absolute top-20 sm:top-28 right-16 lg:right-0 lg:left-[30rem] w-8"
        />
      </BaseSection>
    </section>

    <!-- Crypto statistic section -->
    <section
      class="hidden max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12"
    >
      <div class="w-full flex flex-col lg:flex-row items-center justify-center">
        <LandingCryptoStatistic
          data-aos="fade-up"
          title="🔥 Trending"
          :datasets="trendings"
          class="xl:border-r border-gray-200 lg:px-8"
        />
        <LandingCryptoStatistic
          data-aos="fade-up"
          data-aos-delay="150"
          title="🚀 Top Gainers"
          :datasets="topGainers"
          class="xl:border-r border-gray-200 lg:px-8"
        />
        <LandingCryptoStatistic
          data-aos="fade-up"
          data-aos-delay="300"
          title="💎 Recently Added"
          :datasets="recents"
          class="lg:px-8"
        />
      </div>
    </section>

    <!-- Buy and trade section -->

    <section class="w-full mt-8">
      <BaseSection>
        <LandingBuyTradeImage class="sm:hidden mb-8" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-4xl font-semibold sm:pr-8 xl:pr-12">
            Start Building <br class="hidden sm:block" />
            Your Winning Resume Today!
          </h2>
          <p class="paragraph">
            Take the first step towards landing your dream job by creating a compelling resume with our user-friendly
            platform. Our intuitive resume builder empowers you to showcase your skills, qualifications, and
            achievements with ease.
          </p>
          <!-- <div class="space-y-6 lg:pr-12">
            <LandingExchange
              title="Amount"
              name="amount"
              type="number"
              default-value="5.000"
              :exchange-selected="currencySelected"
              :exchanges="currencies"
            />
            <LandingExchange
              title="Get"
              name="get"
              type="number"
              default-value="0.10901"
              :exchange-selected="cryptoSelected"
              :exchanges="cryptocurrencies"
            />
            <BaseButton class="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">Buy Now</BaseButton>
          </div> -->
        </div>
        <LandingBuyTradeImage data-aos="fade-left" class="hidden sm:block" />
      </BaseSection>
    </section>

    <section class="w-full mt-2">
      <BaseSection>
        <!-- <LandingBuyTradeImage class="sm:hidden mb-8" /> -->
        <EditResumeImage data-aos="fade-right" class="" />

        <div data-aos="fade-left" class="col-span-12 lg:col-span-6 mt-4 xl:mt-8 space-y-6 px-4">
          <h2 class="text-4xl font-semibold sm:pr-8 xl:pr-12">Already have a Resume?</h2>
          <p class="paragraph">
            Give your existing resume a professional makeover and increase its impact with our easy-to-use editing
            tools. Whether you need to update your work experience, refine your skills section, or reformat the layout,
            our platform provides a seamless editing experience.
          </p>
          <!-- <div class="space-y-6 lg:pr-12">
            <LandingExchange
              title="Amount"
              name="amount"
              type="number"
              default-value="5.000"
              :exchange-selected="currencySelected"
              :exchanges="currencies"
            />
            <LandingExchange
              title="Get"
              name="get"
              type="number"
              default-value="0.10901"
              :exchange-selected="cryptoSelected"
              :exchanges="cryptocurrencies"
            />
            <BaseButton class="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">Buy Now</BaseButton>
          </div> -->
        </div>
      </BaseSection>
    </section>

    <!-- Partners section -->
    <section class="bg-partner relative max-w-full sm:mx-6 my-8 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
        <h3 data-aos="flip-down" class="text-2xl text-neutral-800 font-semibold">Trusted Partners Worldwide</h3>
        <p data-aos="flip-down" class="paragraph">We're partners with countless major organisations around the globe</p>
        <div data-aos="fade-up" class="flex flex-wrap items-center justify-center">
          <LandingPartnerImage
            v-for="img in ['clever.png', 'diamon-cutts.png', 'swiss-finance.png', 'gambio.png']"
            :key="img"
            :img="img"
          />
        </div>
      </div>
    </section>

    <!-- Credit card section -->
    <!-- <section class="w-full my-36">
      <BaseSection data-aos="fade-down">
        <div class="col-span-12 lg:col-span-7">
          <div class="w-full">
            <img :src="require('~/assets/img/landing-cc.webp')" class="w-[95%]" alt="" />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 class="text-4xl font-semibold">
            Introducing the <span class="text-header-gradient">landing</span> Credit Card
          </h2>
          <p class="paragraph">Subject to cardholder and rewards terms which will be available at application.</p>
          <ul class="space-y-4 sm:space-y-2">
            <LandingListItem title="Up to 3% back on purchases" />
            <LandingListItem title="Earn rewards in bitcoin or any crypto on landing" />
            <LandingListItem title="No annual fee" />
          </ul>
          <BaseButton
            class="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base"
            >Join the waitlist</BaseButton
          >
        </div>
      </BaseSection>
    </section> -->

    <!-- Advanced trading tools section -->
    <section class="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden">
      <div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <LandingTradingToolImage class="sm:hidden" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <h2 class="text-4xl font-semibold">
            Advanced Resume Builder Empowered by

            <span class="text-header-gradient">AI Technology</span>
          </h2>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Unleash the Power of AI .</h4>
            <p class="paragraph text-sm xl:text-base">
              Our AI algorithms analyze your skills, experiences, and qualifications to provide personalized suggestions
              and optimize your resume's content, format, and keywords. With AI guidance, you can create a standout
              resume that catches the attention of employers
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Professional Access and Non-stop Availability</h4>
            <p class="paragraph text-sm xl:text-base">
              We offer premium access to our resume builder, catering to both individuals and institutions. With high
              availability and seamless performance, you can create or edit your resume anytime, anywhere. Our platform
              ensures that you have the tools and resources at your fingertips to make a lasting impression on potential
              employers.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Dedicated Customer Support</h4>
            <p class="paragraph text-sm xl:text-base">
              We understand the importance of exceptional customer support. Our team of professionals is available
              around the clock to assist you with any questions or concerns you may have. Whether you need guidance on
              optimizing your resume or technical assistance, our dedicated support staff is here to provide timely and
              personalized help.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row">
            <BaseButton
              class="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base"
              @click="$router.push({ name: 'loginPage' })"
            >
              Get Started
            </BaseButton>
            <BaseButton class="bg-inherit text-[#4A8FF6] px-10 py-4 text-center underline rounded-full">
              Learn More
            </BaseButton>
          </div>
        </div>
        <LandingTradingToolImage data-aos="fade-left" class="hidden sm:block" />
      </div>
    </section>

    <!-- Industry-leading security section -->
    <!-- <section class="w-full my-24">
      <div class="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('~/assets/img/industry-leading-security.webp')" class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" class="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8">
          <h2 class="text-4xl font-semibold">Industry-leading security from day one</h2>
          <ul class="space-y-8 sm:space-y-4">
            <LandingListItem title="Safety, security and compliance">
              <p class="text-sm text-gray-700 leading-relaxed">
                landing is a licensed New York trust company that undergoes regular bank exams and is subject to the
                cybersecurity audits conducted by the New York Department of Financial Services.
                <span class="underline">Learn more</span> about our commitment to security.
              </p>
            </LandingListItem>
            <LandingListItem title="Hardware security keys">
              <p class="text-sm text-gray-700 leading-relaxed">
                With landing you can secure your account with a hardware security key via WebAuthn.
              </p>
            </LandingListItem>
            <LandingListItem title="SOC Certifications">
              <p class="text-sm text-gray-700 leading-relaxed">
                landing is <span class="underline">SOC 1 Type 2</span> and
                <span class="underline">SOC 2 Type 2</span> compliant. We are the world’s first cryptocurrency exchange
                and custodian to complete these exams.
              </p>
            </LandingListItem>
          </ul>
        </div>
      </div>
    </section> -->

    <!-- Getting started section -->
    <section class="bg-trading-tools relative max-w-full sm:mx-4 xl:mx-10 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">
          Get started in just a few minutes
        </h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <LandingStep v-for="step in steps" :key="step.title" :step="step" />
          <!-- <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          /> -->
        </div>
      </div>
    </section>

    <!-- FAQ section -->
    <section class="w-full my-24">
      <BaseSection>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('~/assets/img/question.png')" class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8">
          <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">Support</span>
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">Frequently asked questions</h2>

          <ul class="shadow-box">
            <BaseAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
          </ul>
        </div>
      </BaseSection>
    </section>

    <div class="w-full my-10 flex justify-center">
      <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Back to top</span>
        <ArrowUpIcon :size="20" />
      </a>
    </div>
  </div>
</template>

<script>
import EditResumeImage from '../components/landing/EditResumeImage.vue'

import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  components: { EditResumeImage },

  mixins: [aosMixin],
  data() {
    return {
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      currencySelected: {
        img: 'country-icon/eng.png',
        name: 'USD',
      },
      currencies: [
        {
          img: 'country-icon/eng.png',
          name: 'USD',
        },
      ],
      cryptoSelected: {
        img: 'crypto-icon/bitcoin.png',
        name: 'BTC',
      },
      cryptocurrencies: [
        {
          img: 'crypto-icon/bitcoin.png',
          name: 'BTC',
        },
      ],
      trendings: [
        {
          id: 1,
          name: 'Bitcoin',
          price: 43180.13,
          logo: 'bitcoin.png',
          increase: true,
          data: [40, 35, 60, 75, 60, 75, 50],
        },
        {
          id: 2,
          name: 'Ethereum',
          price: 3480.65,
          logo: 'ethereum.png',
          increase: false,
          data: [25, 30, 60, 50, 80, 55, 80],
        },
        {
          id: 3,
          name: 'Solana',
          price: 150.2,
          logo: 'solana.png',
          increase: true,
          data: [40, 45, 40, 80, 50, 60, 35],
        },
        {
          id: 4,
          name: 'Dogecoin',
          price: 0.1572,
          logo: 'dogecoin.png',
          increase: true,
          data: [35, 70, 60, 80, 50, 60, 40],
        },
      ],
      topGainers: [
        {
          id: 1,
          name: 'PAPPAY',
          price: 0.00374,
          logo: 'pappay.png',
          increase: true,
          data: [30, 50, 45, 60, 70, 40, 45],
        },
        {
          id: 2,
          name: 'Bitcoin Asia',
          price: 0.02096,
          logo: 'bitcoin-asia.png',
          increase: true,
          data: [25, 60, 50, 60, 35, 50, 70],
        },
        {
          id: 3,
          name: 'MoonRock',
          price: 0.004907,
          logo: 'moonrock.png',
          increase: true,
          data: [40, 35, 40, 25, 50, 70, 45],
        },
        {
          id: 4,
          name: 'NinjaFloki',
          price: 0.000123,
          logo: 'ninjafloki.png',
          increase: true,
          data: [45, 35, 40, 30, 25, 45, 35],
        },
      ],
      recents: [
        {
          id: 1,
          name: 'MetaCraft',
          price: 0.0608,
          logo: 'metacraft.png',
          increase: false,
          data: [40, 50, 45, 60, 35, 40, 45],
        },
        {
          id: 2,
          name: 'Frog',
          price: 0.5875,
          logo: 'frog.png',
          increase: false,
          data: [25, 50, 45, 48, 40, 60, 45],
        },
        {
          id: 3,
          name: 'Musk Doge',
          price: 0.04041,
          logo: 'musk-doge.png',
          increase: true,
          data: [25, 35, 60, 45, 50, 45, 45],
        },
        {
          id: 4,
          name: '2SHARE',
          price: 1366.24,
          logo: '2share.png',
          increase: true,
          data: [35, 30, 60, 50, 35, 45, 40],
        },
      ],
      accordions: [
        {
          title: 'How does the AI-powered resume builder enhance my resume?',
          description:
            "Our AI-powered resume builder utilizes advanced algorithms to analyze your skills, experiences, and qualifications. It provides personalized suggestions to optimize your resume's content, format, and keywords. This ensures that your resume stands out and effectively highlights your strengths, increasing your chances of getting noticed by employers.",
        },
        {
          title: 'Will my personal information be secure when using the AI-powered resume builder?',
          description:
            'We prioritize the security and privacy of our users. Your personal information is treated with the utmost confidentiality and protected through advanced security measures. Rest assured that your data is stored securely and handled in compliance with the highest industry standards.',
        },
        {
          title: 'Can I access the AI-powered resume builder on multiple devices?',
          description:
            'Yes! Our resume builder is designed to be accessible from various devices, including desktops, laptops, tablets, and mobile phones. You can seamlessly switch between devices and continue working on your resume from anywhere at any time. All your progress and changes will be saved automatically, ensuring a smooth and uninterrupted resume building experience.',
        },
        {
          title: 'Can I customize the resume templates provided by the AI-powered builder?',
          description:
            'Absolutely! While our AI-powered resume builder offers pre-designed templates to choose from, you have full customization control. You can modify the layout, fonts, colors, and sections to create a resume that aligns with your personal brand and showcases your unique professional identity.',
        },
      ],
      steps: [
        {
          img: 'login.png',
          title: 'Sign Up',
          description:
            'Start your journey towards a professional and impactful resume by signing up for our platform. ',
        },
        {
          img: 'create.png',
          title: 'Build Resume',
          description: "Once you've signed up, dive into our intuitive resume builder.",
        },
        {
          img: 'download.png',
          title: 'Download',
          description:
            "When you're satisfied with your resume, it's time to download and share it with potential employers.",
        },
      ],
    }
  },
}
</script>
<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('../assets/img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
