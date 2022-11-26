import { FaqIcon } from "../../../components/Icons/faqIcon";
import { Flex } from "../../../components/layouts/Flex";
import { CopyIcon } from "../../../components/Icons/copyIcon";
import { LinkIcon } from "../../../components/Icons/LinkIcon";
import { useAppSelector } from "../../../hooks/hooks";

export const PersonalBoard = () => {

  const { wallet } = useAppSelector(state => state.web3)

  const baseUrl = 'http://localhost:3000'

  const shortWallet = wallet?.slice(0, 5).concat('...')

  const refLinkFull = wallet !== null ? baseUrl + '/?' + wallet : baseUrl

  const refLink = wallet !== null ? baseUrl + '/?' + shortWallet : baseUrl;

  const handleCopy = () => navigator.clipboard.writeText(refLinkFull)

  return (
    <div className="personal-board col-8 col-sm-6 m-auto">
      <Flex>
        <span className="me-2">My personal link</span>
        <FaqIcon />
      </Flex>
      <Flex>
        <a onClick={handleCopy} className="personal-link">{refLink}</a>
        <div className="mx-1 mx-md-3" onClick={handleCopy}>
          <CopyIcon/>
        </div>
      </Flex>
    </div>
  );
};
