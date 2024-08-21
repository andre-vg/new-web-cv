'use client';
import { Button } from '@nextui-org/button';
import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import { Input } from '@nextui-org/input';
import { ArrowRightIcon, Send } from 'lucide-react';
import axios from 'axios';
import { TextEffect } from '../core/text-effect';

export default function ModalAI() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [question, setQuestion] = React.useState('');
  const [response, setResponse] = React.useState('');
  return (
    <>
      <Button
        isIconOnly
        className="absolute bottom-16 left-16"
        size="lg"
        color="primary"
        onPress={onOpen}
      >
        aaaa
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Digite sua pergunta"
                  placeholder="Quem é André??"
                  onValueChange={setQuestion}
                  endContent={
                    <Button
                      size="sm"
                      isIconOnly
                      onPress={() => {
                        setResponse('');
                        axios.post('/api', { question }).then((res) => {
                          setResponse(res.data.content);
                        });
                      }}
                    >
                      <ArrowRightIcon strokeWidth={1} />
                    </Button>
                  }
                />
                <TextEffect per="word" as="p" preset="slide">
                  {response}
                </TextEffect>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
