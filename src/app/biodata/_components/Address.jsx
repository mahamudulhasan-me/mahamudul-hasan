import MobileViewRow from "./MobileViewCol";
import SectionContainer from "./SectionContainer";

const Address = () => {
  return (
    <SectionContainer title="ঠিকানা">
      <h6 className="bio-element">
        <span className="bio-label">স্থায়ী ঠিকানা</span>
        <p className="bio-value">
          গ্রাম: পাতিল্লাকুড়া, ইউনিয়ন: বড় জামালপুর, উপজেলা: সাদুল্লাপুর,
          জেলা: গাইবান্ধা, বিভাগ: রংপুর, বাংলাদেশ।
        </p>
      </h6>

      <h6 className="bio-element bg-navy-light/20">
        <span className="bio-label">বর্তমান ঠিকানা</span>
        <span className="bio-value">
          সেক্টর-১২, উত্তরা, ঢাকা-১২৩০, বাংলাদেশ।
        </span>
      </h6>

      <MobileViewRow
        label={"শৈশব ও বেড়ে ওঠা"}
        value="শৈশব ও স্কুলজীবন নিজ গ্রামেই কেটেছে। এসএসসি পর্যন্ত নিজ এলাকায়
          পড়াশোনা করেছি। এরপর ডিপ্লোমা ইন ইঞ্জিনিয়ারিং অধ্যয়নের জন্য চার বছর
          বগুড়ায় ছিলাম। বর্তমানে ঢাকায় থাকছি ও কর্মরত আছি।"
      />
    </SectionContainer>
  );
};

export default Address;
