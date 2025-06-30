import SectionContainer from "./SectionContainer";

const Address = () => {
  return (
    <SectionContainer title="ঠিকানা">
      <h6 className="bio-element ">
        <span className="bio-label">স্থায়ী ঠিকানা</span>
        <p className="bio-value">
          <span> সাদুল্লাপুর, গাইবান্ধা, রংপুর, বাংলাদেশ</span> <br />
          <span>
            <strong>এলাকার নাম: </strong> পাতিল্লাকুড়া, বড় জামালপুর
          </span>
        </p>
      </h6>
      <h6 className="bio-element  bg-navy-light/20">
        <span className="bio-label">বর্তমান ঠিকানা</span>
        <span className="bio-value">
          সেক্টর - ১২, উত্তরা - ১২৩০, ঢাকা, বাংলাদেশ
        </span>
      </h6>
      <h6 className="bio-element ">
        <span className="bio-label">বেড়ে ওঠা</span>
        <span className="bio-value">
          ক্লাস ১০ পর্যন্ত নিজ গ্রামে কাটিয়েছি। এরপর পড়াশোনার জন্য চার বছর
          বগুড়ায় ছিলাম। বর্তমানে ঢাকায় থাকছি।
        </span>
      </h6>
    </SectionContainer>
  );
};

export default Address;
