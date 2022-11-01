import { FaqIcon } from "../../../components/Icons/faqIcon";
import { Flex } from "../../../components/layouts/Flex";
import { CopyIcon } from "../../../components/Icons/copyIcon";
import { LinkIcon } from "../../../components/Icons/LinkIcon";

export const PersonalBoard = () => {
  return (
    <div className="personal-board col-8 col-sm-6 m-auto">
      <Flex>
        <span className="me-2">My personal link</span>
        <FaqIcon />
      </Flex>
      <Flex>
        <a className="personal-link" href="#">https://reflink.com/7pkmtp</a>
        <div className="mx-1 mx-md-3">
          <CopyIcon/>
        </div>
        <LinkIcon />
      </Flex>
    </div>
  );
};
