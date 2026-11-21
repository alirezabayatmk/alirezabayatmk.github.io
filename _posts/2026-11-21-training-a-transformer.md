---
title: "Training a Transformer, one number at a time"
date: 2026-11-21
tags: [transformers, interactive]
description: "A step-by-step simulation of one complete training run of a GPT, end to end, with every number computed by a 300-line PyTorch script."
image: https://alirezabayatmk.github.io/language-modeling/training-a-transformer/preview.png
---

[Training a Transformer](https://alirezabayatmk.github.io/language-modeling/training-a-transformer/)
is a step-by-step simulation of one complete training run of a GPT, end to end:
from raw text, through the forward pass, backpropagation and the optimizer
update, to the trained model generating text. Every number at every step is on
screen, and every number is computed by real code.

[![A slide from the simulation: attention scores computed from the query and key matrices, with the code that produces them on the right](https://alirezabayatmk.github.io/language-modeling/training-a-transformer/preview.png)](https://alirezabayatmk.github.io/language-modeling/training-a-transformer/)

Explanations of transformers usually cover one part of this, most often
attention or the forward pass, and show the shapes of the matrices rather than
their values. The backward pass and the update, where the learning actually
happens, are rarely shown at all. Here nothing is skipped: you can follow the
run from the input text to the loss, back through the gradients of every layer,
and into the weight update.

That only works if the model is small enough to show in full: eight sentences about countries ("the capital
of france is paris", "in japan people speak japanese"), a BPE tokenizer with
35 merges, two blocks with two attention heads each, and vectors only eight
numbers wide.

The 93 slides, in order:

- **Tokenizer:** how BPE builds its vocabulary from the eight sentences.
- **Forward pass:** embeddings, attention, the MLP, and the loss for one batch.
- **Backward pass:** the gradients, flowing back through every layer.
- **Update:** one AdamW step, then all 600 steps of training, with the loss
  falling from 4.19 to 0.096.
- **Decoding:** the trained model writing its own sentences.

All numbers are real. They come from
[`tiny_gpt.py`](https://github.com/alirezabayatmk/language-modeling/blob/main/training-a-transformer/tiny_gpt.py),
a 300-line PyTorch script whose model and training loop follow Andrej
Karpathy's [nanoGPT](https://github.com/karpathy/nanoGPT). The script sits next
to the slides, with the line that produces what you're looking at highlighted,
and running it on a laptop CPU reproduces the numbers in about 20 seconds.
There are also optional exercises along the way, if you want to check yourself.

It's part of [Language Modeling](https://alirezabayatmk.github.io/language-modeling/),
a small collection of interactive simulations and runnable code on how language
models work. The source is [on GitHub](https://github.com/alirezabayatmk/language-modeling).
