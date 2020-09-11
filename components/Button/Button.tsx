import React from 'react';
import './Button.scss';

export interface ButtonProps {
  /**
   * Is this a button or a link?
   */
  tag?:  'a'|'button';
  /**
   * Is this the principal call to action on the page?
   */
  type?: 'contained' | 'oulined' | 'text' ;
  /**
   * Is the button full-width or fits text
   */
  width?: 'normal' | 'full';
  /**
   * How large should the button be?
   */
  height?: 'normal' | 'full' ;
  /**
   * Button contents
   */
  label: string;
   /**
   * Url for a link button
   */
  link?: string;
  /**
   * Name of the Material Icon to add
   */
  icon?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  tag = 'button',
  type = 'contained',
  width = 'normal',
  height = 'normal',
  label,
  link,
  icon,
  ...props
}) => {
  const ButtonTag = tag;
  const mode = `button_${type}`;
  const buttonHeight = height === 'normal' ? '' : `button_high`;
  const buttonWidth = width === 'normal' ? '' : `button_wide`;
  const buttonIcon = icon ? <i className="button__icon">{icon}</i>: null;
  const isIcon = icon ? 'button_icon' : '';
    return (
        <ButtonTag
            type="button"
            className={['button', mode, isIcon, buttonHeight, buttonWidth].join(' ')}
            {...props}
            >
            {label}
            {icon && <i className="button__icon">{icon}</i>}
            {buttonIcon}
        </ButtonTag>
    );
  
};
