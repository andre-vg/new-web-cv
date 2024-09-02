'use client';
import { Button } from '@nextui-org/button';
import React, { useEffect } from 'react';
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
import AIWriter from 'react-aiwriter';
import en from '@/messages/en.json';
import { useMessages } from 'next-intl';

export default function ModalAI() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [question, setQuestion] = React.useState('');
  const [response, setResponse] = React.useState('');

  const t = useMessages() as typeof en;

  return (
    <>
      <Button
        isIconOnly
        className="absolute bottom-16 left-16"
        size="lg"
        color="primary"
        onPress={onOpen}
      >
        AI
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t.ai.title}
              </ModalHeader>
              <ModalBody>
                <p>{/* {t("text")} */}</p>
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
                <AIWriter>
                  <p className="font-mono">{response}</p>
                </AIWriter>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
