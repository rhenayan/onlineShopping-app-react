import React from 'react'
import {Button, ButtonGroup, ButtonOutline} from '../../../components/common/Button'
import styled from 'styled-components'

const OrderButtonGroup = () => {
  return (
    <ButtonGroup>
      <Button>Checkout</Button>
      <ButtonOutline>Continue Shopping</ButtonOutline>
    </ButtonGroup>
  )
}



export default OrderButtonGroup