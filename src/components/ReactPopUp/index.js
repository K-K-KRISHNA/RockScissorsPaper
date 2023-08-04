import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import {PopupContainer, TriggerButton, RulesPic} from './styledComponents'

const ReactPopUp = () => (
  <PopupContainer>
    <Popup modal trigger={<TriggerButton type="button">Rules</TriggerButton>}>
      {close => (
        <>
          <RulesPic
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
          <RiCloseLine onClick={() => close()} />
        </>
      )}
    </Popup>
  </PopupContainer>
)
export default ReactPopUp
