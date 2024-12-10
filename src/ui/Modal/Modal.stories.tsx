import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Modal } from ".";
import React, { useState } from "react";
import { Button } from "../Button";

const meta = {
  title: "UI/Modal",
  component: Modal,
  args: { onClose: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Контент модалки",
  },
  render: () => {
    const [show, setShow] = useState(false);

    return (
      <>
        <Button
          onClick={() => {
            setShow(true);
          }}
        >
<<<<<<< HEAD
          Opene Modal
=======
          Открыть модалку
>>>>>>> main
        </Button>
        {show && (
          <Modal
            onClose={() => {
              setShow(false);
            }}
          >
<<<<<<< HEAD
            Content
=======
            Контент модалки
>>>>>>> main
          </Modal>
        )}
      </>
    );
  },
};
