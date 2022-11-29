import { FaqIcon } from "../../../components/Icons/faqIcon";
import { Flex } from "../../../components/layouts/Flex";
import { CopyIcon } from "../../../components/Icons/copyIcon";
import { useAppSelector } from "../../../hooks/hooks";
import toast from "react-hot-toast";

export const PersonalBoard = () => {

  const { wallet } = useAppSelector(state => state.web3)
  const { user } = useAppSelector(state => state.user)

  const local = 'http://localhost:3000'

  const prod = 'http://treasure.express'

  const baseUrl = local

  const shortWallet = wallet?.slice(0, 5).concat('...')

  const refLinkFull = user !== null ? baseUrl + '/?' + user[0] : baseUrl

  const refLink = user !== null ? baseUrl + '/?' + user[0] : baseUrl;

  const handleCopy = () => {
    notify();
    return navigator.clipboard.writeText(refLinkFull);
  }

  const notify = () => toast('Сopied!');

  return (
    <div className="personal-board col-8 col-sm-6 m-auto">
      <Flex>
        <span className="me-2">My personal link</span>
        <FaqIcon />
      </Flex>
      <Flex>
        <a style={{ cursor: 'pointer' }} onClick={handleCopy} className="personal-link">{refLink}</a>
        <div className="mx-1 mx-md-3" onClick={handleCopy}>
          <CopyIcon/>
        </div>
      </Flex>
    </div>
  );
};
