import faqIcon from '../../assets/img/icons/faq.svg'

export const FaqIcon = () => {
    return (
    <div className="tip-wrapper">
        <img src={faqIcon} alt={'faq'}/>
        <p className="box-tip">Share your personal referral link to get additional signup bonuses </p>
    </div>
    );
};
