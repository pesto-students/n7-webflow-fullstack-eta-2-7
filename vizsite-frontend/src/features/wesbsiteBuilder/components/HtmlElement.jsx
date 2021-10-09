import React from 'react';
import { useDrag } from 'react-dnd';
import { Stack, Text } from '@chakra-ui/react';
import { ItemTypes } from './ItemTypes';

export default function HtmlElement(props) {
  const {
    title, icon, name, type,
  } = props;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: {
      title, name, type,
    },
    end: () => {},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div
      ref={drag}
      role="Box"
      style={{ opacity }}
      data-testid={`box-${type}`}
    >
      <Stack
        bgGradient="linear(to-r,  #8e2de2, #4a00e0)"
        borderRadius="sm"
        p="4"
        boxShadow="md"
        alignItems="center"
        minHeight="20"
        justifyContent="space-around"
      >
        {icon || ''}
        <Text fontSize="sm" fontWeight="bold">
          {title}
        </Text>

      </Stack>
    </div>
  );
}
