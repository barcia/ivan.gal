import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";
import { RESEND_API_KEY, RESEND_AUDIENCE_ID } from "astro:env/server";

const resend = new Resend(RESEND_API_KEY);

export const server = {
	subscribe: defineAction({
		accept: "form",
		input: z.object({
			email: z.string().email(),
			terms: z.boolean(),
		}),
		handler: async (input, context) => {
			try {
				await resend.contacts.create({
					email: input.email,
					unsubscribed: false,
					audienceId: RESEND_AUDIENCE_ID,
				});
				return {
					success: true,
					message: "Suscrito correctamente",
				};
			} catch (error) {
				console.error(error);
			}
		},
	}),
	getGreeting: defineAction({
		input: z.object({
			name: z.string(),
		}),
		handler: async (input) => {
			return `Hello, ${input.name}!`;
		},
	}),
};
