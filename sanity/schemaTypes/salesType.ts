import { TagIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const salesType = defineType({
  name: 'sale',
  title: 'Sale',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Sale Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Sale Description',
    }),
    defineField({
      name: 'discountAmount',
      type: 'number',
      title: 'Discount Amount',
      description: 'Amount off in percentage or fixed value',
    }),
    defineField({
      name: 'isActive',
      type: 'boolean',
      title: 'Is Active',
      description: 'Toggle to activate/deactivate the sale',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      discountAmount: 'discountAmount',
      couponCode: 'couponCode',
      isActive: 'isActive',
    },
    prepare(selection) {
      const { title, discountAmount, couponCode, isActive } = selection;
      return {
        title: title,
        subtitle: `${discountAmount}% off | ${couponCode} | ${isActive ? 'Active' : 'Inactive'}`,
      };
    },
  },
});