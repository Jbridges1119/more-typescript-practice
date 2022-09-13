import React, { FC } from 'react'

type Props = {
  gender: string;
  //The "?" makes it optional
  className?: string;
}

const Gender: FC<Props> = ({className, gender}) => {
  return (
    <p className={className}>{gender}</p>
  )
}

export default Gender