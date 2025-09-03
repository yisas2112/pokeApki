import { Tooltip } from 'react-tooltip'

const TooltipCentralized = () => {
  return (
    <>
      <Tooltip
        id="iconBuscar"
        place="top"
        effect="solid"
        content='Buscar'
      />
      <Tooltip
        id="prevPage"
        place="top"
        effect="solid"
        content='Anterior'
      />
      <Tooltip
        id="nextPage"
        place="top"
        effect="solid"
        content='Siguiente'
      />
    </>
  )
}

export default TooltipCentralized
