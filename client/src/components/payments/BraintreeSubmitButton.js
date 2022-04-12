import { Button } from "react-bootstrap";

const BraintreeSubmitButton = ({ onClick, text, isDisabled }) => (
  <Button
    variant="primary"
    onClick={onClick}
    disabled={isDisabled}
  >
    {text}
  </Button>
)

export default BraintreeSubmitButton;